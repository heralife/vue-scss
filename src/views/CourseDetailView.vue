<template>
  <div class="course-detail" v-if="course">
    <div class="course-detail__container">
      <BaseBreadcrumb :items="breadcrumbItems" />

      <div class="course-detail__hero">
        <div class="course-detail__thumbnail">
          <div class="course-detail__thumbnail-placeholder" :style="{ background: course.color || '#e8e8e8' }">
            <span>{{ course.title }}</span>
          </div>
          <BaseBadge v-if="course.isBest" variant="best">베스트</BaseBadge>
          <BaseBadge v-if="course.isNew" variant="new">NEW</BaseBadge>
        </div>
        <div class="course-detail__info">
          <span class="course-detail__category">{{ getCategoryName(course.categoryId) }}</span>
          <h1 class="course-detail__title">{{ course.title }}</h1>
          <p class="course-detail__subtitle">{{ course.subtitle }}</p>
          <div class="course-detail__meta">
            <BaseRating :value="course.rating" :count="course.reviewCount" />
            <span class="course-detail__students">수강생 {{ formatNumber(course.enrollmentCount) }}명</span>
          </div>
          <div class="course-detail__instructor-brief">
            <div class="course-detail__instructor-avatar"></div>
            <span>{{ getInstructorName(course.instructorId) }}</span>
          </div>
        </div>
      </div>

      <div class="course-detail__body">
        <div class="course-detail__content">
          <BaseTab :tabs="tabs" v-model="activeTab">
            <template #intro>
              <div class="course-detail__description" v-html="course.description"></div>
              <div class="course-detail__points" v-if="course.whatYouLearn">
                <h3>이런 것을 배워요</h3>
                <ul>
                  <li v-for="(item, i) in course.whatYouLearn" :key="i">{{ item }}</li>
                </ul>
              </div>
              <div class="course-detail__target" v-if="course.targetAudience">
                <h3>이런 분께 추천해요</h3>
                <ul>
                  <li v-for="(item, i) in course.targetAudience" :key="i">{{ item }}</li>
                </ul>
              </div>
            </template>

            <template #curriculum>
              <CourseCurriculum :sections="course.curriculum" />
            </template>

            <template #reviews>
              <CourseReviewList :courseId="course.id" />
            </template>

            <template #instructor>
              <InstructorCard :instructorId="course.instructorId" :detailed="true" />
            </template>
          </BaseTab>
        </div>

        <div class="course-detail__sidebar">
          <CourseInfoSidebar :course="course" />
        </div>
      </div>

      <RelatedCourses :currentCourse="course" />
    </div>
  </div>
  <div v-else class="course-detail__not-found">
    <p>강의를 찾을 수 없습니다.</p>
    <router-link to="/courses">강의 목록으로 돌아가기</router-link>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCourses } from '@/composables/useCourses'
import { formatNumber } from '@/utils/formatters'
import BaseBreadcrumb from '@/components/common/BaseBreadcrumb.vue'
import BaseBadge from '@/components/common/BaseBadge.vue'
import BaseRating from '@/components/common/BaseRating.vue'
import BaseTab from '@/components/common/BaseTab.vue'
import CourseCurriculum from '@/components/course/CourseCurriculum.vue'
import CourseReviewList from '@/components/course/CourseReviewList.vue'
import CourseInfoSidebar from '@/components/course/CourseInfoSidebar.vue'
import InstructorCard from '@/components/course/InstructorCard.vue'
import RelatedCourses from '@/components/course/RelatedCourses.vue'

const route = useRoute()
const { getCourseById, getInstructorForCourse, getCategoryName } = useCourses()

const course = computed(() => getCourseById(route.params.id))
const activeTab = ref('intro')

const tabs = [
  { key: 'intro', label: '강의소개' },
  { key: 'curriculum', label: '커리큘럼' },
  { key: 'reviews', label: '수강후기' },
  { key: 'instructor', label: '강사소개' }
]

const getInstructorName = (id) => {
  const instructor = getInstructorForCourse({ instructorId: id })
  return instructor?.name || ''
}

const breadcrumbItems = computed(() => [
  { label: '홈', to: '/' },
  { label: '강의 목록', to: '/courses' },
  { label: course.value?.title || '강의 상세' }
])
</script>

<style lang="scss" scoped>
.course-detail {
  padding: $spacing-xl 0 $spacing-3xl;

  &__container {
    @include container;
  }

  &__hero {
    display: flex;
    gap: $spacing-xl;
    margin-top: $spacing-lg;
    padding-bottom: $spacing-xl;
    border-bottom: 1px solid $border-color;

    @include respond-to('md') {
      flex-direction: column;
    }
  }

  &__thumbnail {
    width: 480px;
    flex-shrink: 0;
    position: relative;

    @include respond-to('md') {
      width: 100%;
    }
  }

  &__thumbnail-placeholder {
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: $border-radius-md;
    @include flex-center;
    color: $color-white;
    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
    text-align: center;
    padding: $spacing-md;
  }

  &__info {
    flex: 1;
  }

  &__category {
    display: inline-block;
    padding: 4px 12px;
    background: $color-primary;
    color: $color-white;
    font-size: $font-size-xs;
    font-weight: $font-weight-semibold;
    border-radius: $border-radius-full;
    margin-bottom: $spacing-sm;
  }

  &__title {
    font-size: $font-size-2xl;
    margin-bottom: $spacing-sm;

    @include respond-to('md') {
      font-size: $font-size-xl;
    }
  }

  &__subtitle {
    color: $color-gray-700;
    margin-bottom: $spacing-md;
  }

  &__meta {
    display: flex;
    align-items: center;
    gap: $spacing-md;
    margin-bottom: $spacing-md;
  }

  &__students {
    color: $color-gray-500;
    font-size: $font-size-sm;
  }

  &__instructor-brief {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    font-weight: $font-weight-medium;
  }

  &__instructor-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: $color-gray-300;
  }

  &__body {
    display: flex;
    gap: $spacing-xl;
    margin-top: $spacing-xl;

    @include respond-to('lg') {
      flex-direction: column;
    }
  }

  &__content {
    flex: 1;
    min-width: 0;
  }

  &__sidebar {
    width: 320px;
    flex-shrink: 0;

    @include respond-to('lg') {
      width: 100%;
    }
  }

  &__description {
    line-height: $line-height-base;

    h3 {
      margin: $spacing-lg 0 $spacing-sm;
    }

    p {
      margin-bottom: $spacing-md;
    }
  }

  &__points, &__target {
    margin-top: $spacing-xl;

    h3 {
      font-size: $font-size-lg;
      margin-bottom: $spacing-md;
    }

    ul {
      li {
        position: relative;
        padding-left: $spacing-lg;
        margin-bottom: $spacing-sm;
        color: $color-gray-700;

        &::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: $color-success;
          font-weight: $font-weight-bold;
        }
      }
    }
  }

  &__not-found {
    @include flex-center;
    flex-direction: column;
    gap: $spacing-md;
    padding: $spacing-3xl;
    text-align: center;

    a {
      color: $color-primary;
      text-decoration: underline;
    }
  }
}
</style>
