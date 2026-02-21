<template>
  <div class="course-card-list">
    <div v-if="courses.length > 0" class="course-card-list__grid">
      <CourseCard v-for="course in courses" :key="course.id" :course="course" />
    </div>
    <div v-else class="course-card-list__empty">
      <p>조건에 맞는 강의가 없습니다.</p>
    </div>
  </div>
</template>

<script setup>
import CourseCard from './CourseCard.vue'

defineProps({
  courses: { type: Array, required: true }
})
</script>

<style lang="scss" scoped>
.course-card-list {
  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $spacing-lg;

    @include respond-to('lg') {
      grid-template-columns: repeat(2, 1fr);
    }

    @include respond-to('sm') {
      grid-template-columns: 1fr;
    }
  }

  &__empty {
    text-align: center;
    padding: $spacing-3xl;
    color: $color-gray-500;
  }
}
</style>
