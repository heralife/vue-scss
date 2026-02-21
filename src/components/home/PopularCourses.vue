<template>
  <section class="popular-courses">
    <div class="popular-courses__container">
      <div class="popular-courses__header">
        <h2>인기강의 TOP 8</h2>
        <router-link to="/courses" class="popular-courses__more">전체 보기 →</router-link>
      </div>
      <div class="popular-courses__grid">
        <CourseCard
          v-for="course in popularCourses"
          :key="course.id"
          :course="course"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useCourses } from '@/composables/useCourses'
import CourseCard from '@/components/course/CourseCard.vue'

const { getPopularCourses } = useCourses()
const popularCourses = getPopularCourses(8)
</script>

<style lang="scss" scoped>
.popular-courses {
  padding: $spacing-3xl 0;
  background: $color-gray-100;

  &__container {
    @include container;
  }

  &__header {
    @include flex-between;
    margin-bottom: $spacing-xl;

    h2 {
      font-size: $font-size-2xl;
    }
  }

  &__more {
    color: $color-gray-500;
    font-size: $font-size-sm;

    &:hover {
      color: $color-primary;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: $spacing-lg;

    @include respond-to('xl') {
      grid-template-columns: repeat(3, 1fr);
    }

    @include respond-to('lg') {
      grid-template-columns: repeat(2, 1fr);
    }

    @include respond-to('sm') {
      grid-template-columns: 1fr;
    }
  }
}
</style>
