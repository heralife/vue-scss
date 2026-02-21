<template>
  <div class="curriculum">
    <div
      v-for="(section, i) in sections"
      :key="i"
      class="curriculum__section"
    >
      <button
        class="curriculum__header"
        @click="toggleSection(i)"
      >
        <div class="curriculum__header-left">
          <span class="curriculum__toggle">{{ openSections.includes(i) ? '−' : '+' }}</span>
          <span class="curriculum__section-title">{{ section.sectionTitle }}</span>
        </div>
        <span class="curriculum__lesson-count">{{ section.lessons.length }}강</span>
      </button>

      <div v-if="openSections.includes(i)" class="curriculum__lessons">
        <div
          v-for="lesson in section.lessons"
          :key="lesson.id"
          class="curriculum__lesson"
        >
          <span class="curriculum__lesson-title">
            {{ lesson.title }}
            <span v-if="lesson.isFree" class="curriculum__free-badge">무료</span>
          </span>
          <span class="curriculum__lesson-duration">{{ lesson.duration }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  sections: { type: Array, default: () => [] }
})

const openSections = ref([0])

const toggleSection = (index) => {
  const i = openSections.value.indexOf(index)
  if (i > -1) {
    openSections.value.splice(i, 1)
  } else {
    openSections.value.push(index)
  }
}
</script>

<style lang="scss" scoped>
.curriculum {
  &__section {
    border: 1px solid $border-color;
    border-radius: $border-radius-md;
    margin-bottom: $spacing-sm;
    overflow: hidden;
  }

  &__header {
    @include flex-between;
    width: 100%;
    padding: $spacing-md;
    background: $color-gray-100;
    text-align: left;
    transition: background $transition-fast;

    &:hover {
      background: $color-gray-200;
    }
  }

  &__header-left {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
  }

  &__toggle {
    width: 24px;
    height: 24px;
    @include flex-center;
    background: $color-white;
    border-radius: $border-radius-sm;
    font-weight: $font-weight-bold;
    font-size: $font-size-md;
  }

  &__section-title {
    font-weight: $font-weight-semibold;
    font-size: $font-size-sm;
  }

  &__lesson-count {
    font-size: $font-size-xs;
    color: $color-gray-500;
  }

  &__lessons {
    border-top: 1px solid $border-color;
  }

  &__lesson {
    @include flex-between;
    padding: $spacing-sm $spacing-md $spacing-sm $spacing-2xl;
    border-bottom: 1px solid $color-gray-100;
    font-size: $font-size-sm;

    &:last-child {
      border-bottom: none;
    }
  }

  &__lesson-title {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    color: $color-gray-700;
  }

  &__free-badge {
    padding: 1px 6px;
    background: $color-success;
    color: $color-white;
    font-size: 10px;
    font-weight: $font-weight-bold;
    border-radius: $border-radius-sm;
  }

  &__lesson-duration {
    color: $color-gray-500;
    font-size: $font-size-xs;
  }
}
</style>
