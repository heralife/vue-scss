<template>
  <div class="instructor-card" v-if="instructor">
    <div class="instructor-card__header">
      <div class="instructor-card__avatar" :style="{ background: instructor.color }">
        {{ instructor.name[0] }}
      </div>
      <div>
        <h3 class="instructor-card__name">{{ instructor.name }}</h3>
        <span class="instructor-card__title">{{ instructor.title }}</span>
      </div>
    </div>

    <template v-if="detailed">
      <p class="instructor-card__bio">{{ instructor.bio }}</p>
      <div class="instructor-card__career">
        <h4>경력</h4>
        <ul>
          <li v-for="(item, i) in instructor.career" :key="i">{{ item }}</li>
        </ul>
      </div>
      <div class="instructor-card__stats">
        <span>수강생 {{ formatNumber(instructor.studentCount) }}명</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCourses } from '@/composables/useCourses'
import { formatNumber } from '@/utils/formatters'

const props = defineProps({
  instructorId: { type: Number, required: true },
  detailed: { type: Boolean, default: false }
})

const { getInstructorById } = useCourses()
const instructor = computed(() => getInstructorById(props.instructorId))
</script>

<style lang="scss" scoped>
.instructor-card {
  &__header {
    display: flex;
    align-items: center;
    gap: $spacing-md;
    margin-bottom: $spacing-md;
  }

  &__avatar {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    @include flex-center;
    color: $color-white;
    font-size: $font-size-xl;
    font-weight: $font-weight-bold;
    flex-shrink: 0;
  }

  &__name {
    font-size: $font-size-lg;
    margin-bottom: 2px;
  }

  &__title {
    font-size: $font-size-sm;
    color: $color-gray-500;
  }

  &__bio {
    font-size: $font-size-sm;
    color: $color-gray-700;
    line-height: $line-height-base;
    margin-bottom: $spacing-lg;
  }

  &__career {
    margin-bottom: $spacing-md;

    h4 {
      font-size: $font-size-sm;
      font-weight: $font-weight-bold;
      margin-bottom: $spacing-sm;
    }

    li {
      font-size: $font-size-sm;
      color: $color-gray-700;
      padding: 4px 0;
      padding-left: $spacing-md;
      position: relative;

      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: $color-primary;
      }
    }
  }

  &__stats {
    font-size: $font-size-sm;
    color: $color-gray-500;
  }
}
</style>
