<template>
  <div class="sort-bar">
    <span class="sort-bar__count">총 <strong>{{ total }}</strong>개의 강의</span>
    <div class="sort-bar__options">
      <button
        v-for="option in sortOptions"
        :key="option.key"
        :class="['sort-bar__btn', { 'sort-bar__btn--active': sort === option.key }]"
        @click="$emit('update:sort', option.key)"
      >
        {{ option.label }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  total: { type: Number, default: 0 },
  sort: { type: String, default: 'popular' }
})

defineEmits(['update:sort'])

const sortOptions = [
  { key: 'popular', label: '인기순' },
  { key: 'newest', label: '최신순' },
  { key: 'priceLow', label: '낮은가격순' },
  { key: 'priceHigh', label: '높은가격순' },
  { key: 'rating', label: '평점순' }
]
</script>

<style lang="scss" scoped>
.sort-bar {
  @include flex-between;
  margin-bottom: $spacing-lg;
  flex-wrap: wrap;
  gap: $spacing-sm;

  &__count {
    font-size: $font-size-sm;
    color: $color-gray-700;

    strong {
      color: $color-primary;
    }
  }

  &__options {
    display: flex;
    gap: 4px;
  }

  &__btn {
    padding: 6px 14px;
    font-size: $font-size-sm;
    color: $color-gray-500;
    border-radius: $border-radius-sm;
    transition: all $transition-fast;

    &:hover {
      color: $color-primary;
    }

    &--active {
      background: $color-primary;
      color: $color-white;

      &:hover {
        color: $color-white;
      }
    }
  }
}
</style>
