<template>
  <div class="course-list-page">
    <div class="course-list-page__container">
      <BaseBreadcrumb :items="breadcrumbItems" />

      <div class="course-list-page__content">
        <aside class="course-list-page__sidebar">
          <CourseFilter
            :filters="filters"
            @update:filters="filters = $event"
          />
        </aside>

        <div class="course-list-page__main">
          <CourseSortBar
            :total="filteredCourses.length"
            :sort="sortBy"
            @update:sort="sortBy = $event"
          />

          <CourseCardList :courses="paginatedCourses" />

          <BasePagination
            v-if="filteredCourses.length > itemsPerPage"
            :total-items="filteredCourses.length"
            :items-per-page="itemsPerPage"
            :current-page="currentPage"
            @page-change="currentPage = $event"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useCourses } from '@/composables/useCourses'
import BaseBreadcrumb from '@/components/common/BaseBreadcrumb.vue'
import BasePagination from '@/components/common/BasePagination.vue'
import CourseFilter from '@/components/course/CourseFilter.vue'
import CourseSortBar from '@/components/course/CourseSortBar.vue'
import CourseCardList from '@/components/course/CourseCardList.vue'

const route = useRoute()
const { filterCourses } = useCourses()

const filters = ref({
  category: route.params.category || '',
  level: '',
  priceRange: null
})
const sortBy = ref('popular')
const currentPage = ref(1)
const itemsPerPage = 12

const breadcrumbItems = computed(() => {
  const items = [{ label: '홈', to: '/' }]
  if (filters.value.category) {
    const categoryNames = {
      language: '어학', toeic: 'TOEIC', toefl: 'TOEFL',
      'english-conversation': '영어회화',
      certification: '자격증', employment: '취업'
    }
    items.push({ label: categoryNames[filters.value.category] || '강의' })
  } else {
    items.push({ label: '전체 강의' })
  }
  return items
})

const filteredCourses = computed(() => {
  return filterCourses({
    category: filters.value.category,
    level: filters.value.level,
    priceRange: filters.value.priceRange,
    sort: sortBy.value
  })
})

const paginatedCourses = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredCourses.value.slice(start, start + itemsPerPage)
})

watch(() => route.params.category, (val) => {
  filters.value.category = val || ''
  currentPage.value = 1
})

watch(filters, () => { currentPage.value = 1 }, { deep: true })
</script>

<style lang="scss" scoped>
.course-list-page {
  padding: $spacing-xl 0 $spacing-3xl;

  &__container {
    @include container;
  }

  &__content {
    display: flex;
    gap: $spacing-xl;
    margin-top: $spacing-lg;
  }

  &__sidebar {
    width: 240px;
    flex-shrink: 0;

    @include respond-to('lg') {
      display: none;
    }
  }

  &__main {
    flex: 1;
    min-width: 0;
  }
}
</style>
