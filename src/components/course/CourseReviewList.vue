<template>
  <div class="review-list">
    <div class="review-list__summary">
      <div class="review-list__avg">
        <span class="review-list__avg-score">{{ avgRating }}</span>
        <div class="review-list__avg-stars">
          <span v-for="s in 5" :key="s">{{ s <= Math.round(avgRating) ? '★' : '☆' }}</span>
        </div>
        <span class="review-list__count">{{ courseReviews.length }}개의 수강후기</span>
      </div>
    </div>

    <div class="review-list__items">
      <div
        v-for="review in courseReviews"
        :key="review.id"
        class="review-list__item"
      >
        <div class="review-list__item-header">
          <div class="review-list__user">
            <div class="review-list__avatar">{{ review.userName[0] }}</div>
            <span class="review-list__name">{{ review.userName }}</span>
          </div>
          <span class="review-list__date">{{ formatDate(review.createdAt) }}</span>
        </div>
        <div class="review-list__stars">
          <span v-for="s in 5" :key="s">{{ s <= review.rating ? '★' : '☆' }}</span>
        </div>
        <p class="review-list__content">{{ review.content }}</p>
      </div>
    </div>

    <p v-if="courseReviews.length === 0" class="review-list__empty">아직 수강후기가 없습니다.</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { reviews } from '@/data/reviews'
import { formatDate } from '@/utils/formatters'

const props = defineProps({
  courseId: { type: Number, required: true }
})

const courseReviews = computed(() =>
  reviews.filter(r => r.courseId === props.courseId)
)

const avgRating = computed(() => {
  if (courseReviews.value.length === 0) return 0
  const sum = courseReviews.value.reduce((acc, r) => acc + r.rating, 0)
  return (sum / courseReviews.value.length).toFixed(1)
})
</script>

<style lang="scss" scoped>
.review-list {
  &__summary {
    padding: $spacing-lg;
    background: $color-gray-100;
    border-radius: $border-radius-md;
    margin-bottom: $spacing-xl;
    text-align: center;
  }

  &__avg-score {
    font-size: $font-size-3xl;
    font-weight: $font-weight-bold;
    color: $color-black;
  }

  &__avg-stars {
    color: $color-warning;
    font-size: $font-size-xl;
    margin: $spacing-xs 0;
  }

  &__count {
    font-size: $font-size-sm;
    color: $color-gray-500;
  }

  &__item {
    padding: $spacing-lg 0;
    border-bottom: 1px solid $border-color;
  }

  &__item-header {
    @include flex-between;
    margin-bottom: $spacing-sm;
  }

  &__user {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
  }

  &__avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: $color-gray-200;
    @include flex-center;
    font-size: $font-size-sm;
    font-weight: $font-weight-bold;
    color: $color-gray-500;
  }

  &__name {
    font-weight: $font-weight-medium;
    font-size: $font-size-sm;
  }

  &__date {
    font-size: $font-size-xs;
    color: $color-gray-500;
  }

  &__stars {
    color: $color-warning;
    font-size: $font-size-sm;
    margin-bottom: $spacing-sm;
  }

  &__content {
    font-size: $font-size-sm;
    color: $color-gray-700;
    line-height: $line-height-base;
  }

  &__empty {
    text-align: center;
    padding: $spacing-xl;
    color: $color-gray-500;
  }
}
</style>
