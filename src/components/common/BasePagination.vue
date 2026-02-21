<template>
  <nav v-if="totalPages > 1" class="base-pagination">
    <button
      class="base-pagination__btn base-pagination__btn--prev"
      :disabled="currentPage <= 1"
      @click="changePage(currentPage - 1)"
    >
      &lsaquo; Prev
    </button>

    <button
      v-for="page in visiblePages"
      :key="page"
      class="base-pagination__btn"
      :class="{ 'base-pagination__btn--active': page === currentPage, 'base-pagination__btn--ellipsis': page === '...' }"
      :disabled="page === '...'"
      @click="page !== '...' && changePage(page)"
    >
      {{ page }}
    </button>

    <button
      class="base-pagination__btn base-pagination__btn--next"
      :disabled="currentPage >= totalPages"
      @click="changePage(currentPage + 1)"
    >
      Next &rsaquo;
    </button>
  </nav>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  totalItems: {
    type: Number,
    required: true,
  },
  itemsPerPage: {
    type: Number,
    default: 12,
  },
  currentPage: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['page-change']);

const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));

const visiblePages = computed(() => {
  const total = totalPages.value;
  const current = props.currentPage;
  const pages = [];

  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i);
    return pages;
  }

  pages.push(1);
  if (current > 3) pages.push('...');

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) pages.push(i);

  if (current < total - 2) pages.push('...');
  pages.push(total);

  return pages;
});

function changePage(page) {
  if (page >= 1 && page <= totalPages.value) {
    emit('page-change', page);
  }
}
</script>

<style lang="scss" scoped>
.base-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: $spacing-xs;

  &__btn {
    @include button-base;
    min-width: 36px;
    height: 36px;
    padding: $spacing-xs $spacing-sm;
    font-size: $font-size-sm;
    font-family: $font-family-primary;
    color: $color-gray-700;
    background-color: $color-white;
    border: 1px solid $border-color;
    border-radius: $border-radius-md;
    cursor: pointer;
    transition: all $transition-fast;

    &:hover:not(:disabled):not(&--active):not(&--ellipsis) {
      background-color: $color-gray-100;
      border-color: $color-primary;
      color: $color-primary;
    }

    &--active {
      background-color: $color-primary;
      border-color: $color-primary;
      color: $color-white;
      font-weight: $font-weight-semibold;
    }

    &--ellipsis {
      border: none;
      background: none;
      cursor: default;
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    &--prev,
    &--next {
      font-weight: $font-weight-medium;
    }
  }
}
</style>
