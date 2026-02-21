<template>
  <section class="instructor-showcase">
    <div class="instructor-showcase__container">
      <h2 class="instructor-showcase__title">대표 강사진</h2>
      <p class="instructor-showcase__subtitle">해커스교육의 검증된 전문 강사진을 소개합니다</p>
      <div class="instructor-showcase__grid">
        <div
          v-for="instructor in featuredInstructors"
          :key="instructor.id"
          class="instructor-showcase__card"
        >
          <div class="instructor-showcase__avatar" :style="{ background: instructor.color }">
            {{ instructor.name[0] }}
          </div>
          <h3>{{ instructor.name }}</h3>
          <span class="instructor-showcase__specialty">{{ instructor.title }}</span>
          <p class="instructor-showcase__students">
            수강생 {{ formatNumber(instructor.studentCount) }}명
          </p>
          <router-link
            :to="`/courses`"
            class="instructor-showcase__link"
          >
            강의 보기
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { instructors } from '@/data/instructors'
import { formatNumber } from '@/utils/formatters'

const featuredInstructors = instructors.slice(0, 4)
</script>

<style lang="scss" scoped>
.instructor-showcase {
  padding: $spacing-3xl 0;

  &__container {
    @include container;
    text-align: center;
  }

  &__title {
    font-size: $font-size-2xl;
    margin-bottom: $spacing-sm;
  }

  &__subtitle {
    color: $color-gray-500;
    margin-bottom: $spacing-xl;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: $spacing-lg;

    @include respond-to('lg') {
      grid-template-columns: repeat(2, 1fr);
    }

    @include respond-to('sm') {
      grid-template-columns: 1fr;
    }
  }

  &__card {
    @include card-base;
    padding: $spacing-xl;
    text-align: center;
  }

  &__avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    @include flex-center;
    margin: 0 auto $spacing-md;
    color: $color-white;
    font-size: $font-size-2xl;
    font-weight: $font-weight-bold;
  }

  &__card h3 {
    font-size: $font-size-lg;
    margin-bottom: $spacing-xs;
  }

  &__specialty {
    font-size: $font-size-sm;
    color: $color-gray-500;
    display: block;
    margin-bottom: $spacing-sm;
  }

  &__students {
    font-size: $font-size-sm;
    color: $color-gray-700;
    margin-bottom: $spacing-md;
  }

  &__link {
    display: inline-block;
    padding: 8px 20px;
    border: 1px solid $color-primary;
    color: $color-primary;
    border-radius: $border-radius-sm;
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    transition: all $transition-fast;

    &:hover {
      background: $color-primary;
      color: $color-white;
    }
  }
}
</style>
