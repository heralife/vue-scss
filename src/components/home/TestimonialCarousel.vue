<template>
  <section class="testimonials">
    <div class="testimonials__container">
      <h2 class="testimonials__title">수강생 후기</h2>
      <div class="testimonials__slider">
        <div class="testimonials__track" :style="{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }">
          <div
            v-for="review in featuredReviews"
            :key="review.id"
            class="testimonials__card"
          >
            <div class="testimonials__stars">
              <span v-for="s in 5" :key="s">{{ s <= review.rating ? '★' : '☆' }}</span>
            </div>
            <p class="testimonials__text">"{{ review.content }}"</p>
            <div class="testimonials__author">
              <span class="testimonials__name">{{ review.userName }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="testimonials__nav">
        <button @click="prev" :disabled="currentIndex === 0">←</button>
        <button @click="next" :disabled="currentIndex >= maxIndex">→</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { reviews } from '@/data/reviews'

const featuredReviews = reviews.filter(r => r.rating >= 4).slice(0, 8)
const visibleCount = 3
const currentIndex = ref(0)
const maxIndex = computed(() => Math.max(0, featuredReviews.length - visibleCount))

const next = () => {
  if (currentIndex.value < maxIndex.value) currentIndex.value++
}
const prev = () => {
  if (currentIndex.value > 0) currentIndex.value--
}
</script>

<style lang="scss" scoped>
.testimonials {
  padding: $spacing-3xl 0;
  background: $color-gray-100;

  &__container {
    @include container;
  }

  &__title {
    font-size: $font-size-2xl;
    text-align: center;
    margin-bottom: $spacing-xl;
  }

  &__slider {
    overflow: hidden;
  }

  &__track {
    display: flex;
    transition: transform 0.4s ease;
  }

  &__card {
    min-width: calc(100% / 3);
    padding: 0 $spacing-sm;
    box-sizing: border-box;

    @include respond-to('lg') {
      min-width: 50%;
    }

    @include respond-to('md') {
      min-width: 100%;
    }

    > * {
      background: $color-white;
      border-radius: $border-radius-md;
      padding: $spacing-lg;
      box-shadow: $shadow-card;
      height: 100%;
    }
  }

  &__stars {
    color: $color-warning;
    font-size: $font-size-lg;
    margin-bottom: $spacing-sm;
  }

  &__text {
    font-size: $font-size-sm;
    color: $color-gray-700;
    line-height: $line-height-base;
    @include text-ellipsis(3);
    margin-bottom: $spacing-md;
  }

  &__name {
    font-weight: $font-weight-semibold;
    font-size: $font-size-sm;
  }

  &__nav {
    @include flex-center;
    gap: $spacing-sm;
    margin-top: $spacing-lg;

    button {
      @include flex-center;
      width: 40px;
      height: 40px;
      border: 1px solid $border-color;
      border-radius: 50%;
      font-size: $font-size-lg;
      background: $color-white;
      transition: all $transition-fast;

      &:hover:not(:disabled) {
        border-color: $color-primary;
        color: $color-primary;
      }

      &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }
    }
  }
}
</style>
