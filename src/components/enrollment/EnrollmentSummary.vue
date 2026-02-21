<template>
  <div class="enrollment-summary">
    <h3>수강 강의</h3>
    <div v-if="items.length > 0" class="enrollment-summary__list">
      <div v-for="item in items" :key="item.id" class="enrollment-summary__item">
        <div class="enrollment-summary__info">
          <span class="enrollment-summary__title">{{ item.title }}</span>
          <span class="enrollment-summary__price">{{ formatPrice(item.salePrice) }}원</span>
        </div>
        <button class="enrollment-summary__remove" @click="$emit('remove', item.id)">삭제</button>
      </div>
    </div>
    <p v-else class="enrollment-summary__empty">수강할 강의가 없습니다.</p>
  </div>
</template>

<script setup>
import { formatPrice } from '@/utils/formatters'

defineProps({
  items: { type: Array, default: () => [] }
})

defineEmits(['remove'])
</script>

<style lang="scss" scoped>
.enrollment-summary {
  background: $color-white;
  border: 1px solid $border-color;
  border-radius: $border-radius-md;
  padding: $spacing-lg;

  h3 {
    font-size: $font-size-lg;
    margin-bottom: $spacing-md;
  }

  &__item {
    @include flex-between;
    padding: $spacing-md 0;
    border-bottom: 1px solid $color-gray-100;

    &:last-child { border-bottom: none; }
  }

  &__title {
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
  }

  &__price {
    font-weight: $font-weight-semibold;
    margin-left: $spacing-md;
  }

  &__remove {
    font-size: $font-size-xs;
    color: $color-gray-500;
    padding: 4px 8px;

    &:hover { color: $color-error; }
  }

  &__empty {
    text-align: center;
    padding: $spacing-lg;
    color: $color-gray-500;
  }
}
</style>
