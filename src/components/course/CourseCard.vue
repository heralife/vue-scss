<template>
  <router-link :to="`/course/${course.id}`" class="course-card">
    <div class="course-card__thumb" :style="{ background: course.color || '#e8e8e8' }">
      <span class="course-card__thumb-text">{{ course.title }}</span>
      <div class="course-card__badges">
        <span v-if="course.isBest" class="course-card__badge course-card__badge--best">베스트</span>
        <span v-if="course.isNew" class="course-card__badge course-card__badge--new">NEW</span>
        <span v-if="course.discountRate >= 30" class="course-card__badge course-card__badge--discount">{{ course.discountRate }}%</span>
      </div>
    </div>
    <div class="course-card__body">
      <span class="course-card__category">{{ getCategoryName(course.categoryId) }}</span>
      <h3 class="course-card__title">{{ course.title }}</h3>
      <div class="course-card__instructor">
        <div class="course-card__instructor-avatar" :style="{ background: getInstructorColor(course.instructorId) }">
          {{ getInstructorInitial(course.instructorId) }}
        </div>
        <span>{{ getInstructorName(course.instructorId) }}</span>
      </div>
      <div class="course-card__rating">
        <span class="course-card__stars">★ {{ course.rating }}</span>
        <span class="course-card__review-count">({{ course.reviewCount }})</span>
      </div>
      <div class="course-card__price">
        <span v-if="course.originalPrice !== course.salePrice" class="course-card__original-price">
          {{ formatPrice(course.originalPrice) }}원
        </span>
        <span class="course-card__sale-price">{{ formatPrice(course.salePrice) }}원</span>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { useCourses } from '@/composables/useCourses'
import { formatPrice } from '@/utils/formatters'

defineProps({
  course: { type: Object, required: true }
})

const { getCategoryName, getInstructorForCourse, getInstructorById } = useCourses()

const getInstructorName = (id) => getInstructorById(id)?.name || ''
const getInstructorInitial = (id) => (getInstructorById(id)?.name || '')[0] || ''
const getInstructorColor = (id) => getInstructorById(id)?.color || '#ccc'
</script>

<style lang="scss" scoped>
.course-card {
  @include card-base;
  display: block;

  &__thumb {
    position: relative;
    aspect-ratio: 16/9;
    @include flex-center;
    overflow: hidden;
  }

  &__thumb-text {
    color: rgba(255, 255, 255, 0.9);
    font-weight: $font-weight-bold;
    font-size: $font-size-sm;
    text-align: center;
    padding: $spacing-sm;
  }

  &__badges {
    position: absolute;
    top: $spacing-sm;
    left: $spacing-sm;
    display: flex;
    gap: 4px;
  }

  &__badge {
    padding: 2px 8px;
    border-radius: $border-radius-sm;
    font-size: 11px;
    font-weight: $font-weight-bold;
    color: $color-white;

    &--best { background: $color-primary; }
    &--new { background: $color-success; }
    &--discount { background: $color-accent; }
  }

  &__body {
    padding: $spacing-md;
  }

  &__category {
    font-size: $font-size-xs;
    color: $color-gray-500;
    font-weight: $font-weight-medium;
  }

  &__title {
    font-size: $font-size-base;
    font-weight: $font-weight-semibold;
    margin: $spacing-xs 0;
    @include text-ellipsis(2);
    line-height: $line-height-tight;
  }

  &__instructor {
    display: flex;
    align-items: center;
    gap: $spacing-xs;
    margin: $spacing-sm 0;
    font-size: $font-size-sm;
    color: $color-gray-700;
  }

  &__instructor-avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    @include flex-center;
    color: $color-white;
    font-size: 11px;
    font-weight: $font-weight-bold;
  }

  &__rating {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: $spacing-sm;
  }

  &__stars {
    color: $color-warning;
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
  }

  &__review-count {
    font-size: $font-size-xs;
    color: $color-gray-500;
  }

  &__price {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
  }

  &__original-price {
    font-size: $font-size-sm;
    color: $color-gray-300;
    text-decoration: line-through;
  }

  &__sale-price {
    font-size: $font-size-md;
    font-weight: $font-weight-bold;
    color: $color-black;
  }
}
</style>
