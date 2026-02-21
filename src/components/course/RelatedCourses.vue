<template>
  <div class="related-courses" v-if="relatedCourses.length > 0">
    <h2 class="related-courses__title">관련 강의</h2>
    <div class="related-courses__grid">
      <CourseCard
        v-for="course in relatedCourses"
        :key="course.id"
        :course="course"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCourses } from '@/composables/useCourses'
import CourseCard from './CourseCard.vue'

const props = defineProps({
  currentCourse: { type: Object, required: true }
})

const { getCoursesByCategory } = useCourses()

const relatedCourses = computed(() =>
  getCoursesByCategory(props.currentCourse.parentCategoryId)
    .filter(c => c.id !== props.currentCourse.id)
    .slice(0, 4)
)
</script>

<style lang="scss" scoped>
.related-courses {
  margin-top: $spacing-3xl;
  padding-top: $spacing-xl;
  border-top: 1px solid $border-color;

  &__title {
    font-size: $font-size-xl;
    margin-bottom: $spacing-lg;
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
}
</style>
