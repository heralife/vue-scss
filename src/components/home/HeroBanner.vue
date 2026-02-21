<template>
  <section class="hero">
    <div class="hero__slider">
      <div
        class="hero__track"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div
          v-for="banner in banners"
          :key="banner.id"
          class="hero__slide"
          :style="{ background: banner.color }"
        >
          <div class="hero__slide-content">
            <span class="hero__slide-subtitle">{{ banner.subtitle }}</span>
            <h2 class="hero__slide-title">{{ banner.title }}</h2>
            <p class="hero__slide-desc">{{ banner.description }}</p>
            <router-link :to="banner.link" class="hero__slide-btn">
              {{ banner.buttonText }}
            </router-link>
          </div>
        </div>
      </div>

      <button class="hero__arrow hero__arrow--prev" @click="prevSlide" aria-label="이전">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button class="hero__arrow hero__arrow--next" @click="nextSlide" aria-label="다음">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
      </button>

      <div class="hero__dots">
        <button
          v-for="(_, i) in banners"
          :key="i"
          :class="['hero__dot', { 'hero__dot--active': currentSlide === i }]"
          @click="currentSlide = i"
          :aria-label="`슬라이드 ${i + 1}`"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { banners } from '@/data/banners'

const currentSlide = ref(0)
let timer = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % banners.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + banners.length) % banners.length
}

const startAutoPlay = () => {
  timer = setInterval(nextSlide, 5000)
}

const stopAutoPlay = () => {
  if (timer) clearInterval(timer)
}

onMounted(startAutoPlay)
onUnmounted(stopAutoPlay)
</script>

<style lang="scss" scoped>
.hero {
  &__slider {
    position: relative;
    overflow: hidden;

    &:hover {
      .hero__arrow {
        opacity: 1;
      }
    }
  }

  &__track {
    display: flex;
    transition: transform 0.5s ease;
  }

  &__slide {
    min-width: 100%;
    min-height: 420px;
    @include flex-center;
    color: $color-white;

    @include respond-to('md') {
      min-height: 300px;
    }
  }

  &__slide-content {
    text-align: center;
    padding: $spacing-2xl;
    max-width: 600px;
  }

  &__slide-subtitle {
    font-size: $font-size-md;
    opacity: 0.9;
    margin-bottom: $spacing-sm;
    display: block;
  }

  &__slide-title {
    font-size: $font-size-3xl;
    font-weight: $font-weight-bold;
    margin-bottom: $spacing-md;

    @include respond-to('md') {
      font-size: $font-size-2xl;
    }
  }

  &__slide-desc {
    font-size: $font-size-md;
    opacity: 0.85;
    margin-bottom: $spacing-xl;
  }

  &__slide-btn {
    @include button-base;
    background: $color-white;
    color: $color-black;
    padding: 14px 32px;
    font-size: $font-size-base;
    border-radius: $border-radius-md;

    &:hover {
      transform: translateY(-2px);
      box-shadow: $shadow-lg;
    }
  }

  &__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    @include flex-center;
    background: rgba(255, 255, 255, 0.2);
    color: $color-white;
    border-radius: 50%;
    opacity: 0;
    transition: all $transition-base;
    backdrop-filter: blur(4px);

    &:hover {
      background: rgba(255, 255, 255, 0.4);
    }

    &--prev { left: $spacing-md; }
    &--next { right: $spacing-md; }
  }

  &__dots {
    position: absolute;
    bottom: $spacing-lg;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: $spacing-sm;
  }

  &__dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    transition: all $transition-fast;

    &--active {
      background: $color-white;
      transform: scale(1.2);
    }
  }
}
</style>
