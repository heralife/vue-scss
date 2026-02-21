<template>
  <div class="base-rating">
    <span class="base-rating__stars">
      <span v-for="i in 5" :key="i" class="base-rating__star" :class="{ 'base-rating__star--filled': i <= Math.round(value) }">
        {{ i <= Math.round(value) ? '\u2605' : '\u2606' }}
      </span>
    </span>
    <span v-if="count !== undefined" class="base-rating__count">({{ count }})</span>
  </div>
</template>

<script setup>
defineProps({
  value: {
    type: Number,
    default: 0,
    validator: (v) => v >= 0 && v <= 5,
  },
  count: {
    type: Number,
    default: undefined,
  },
});
</script>

<style lang="scss" scoped>
.base-rating {
  display: inline-flex;
  align-items: center;
  gap: $spacing-xs;

  &__stars {
    display: inline-flex;
  }

  &__star {
    font-size: $font-size-md;
    color: $color-gray-300;
    line-height: 1;

    &--filled {
      color: $color-warning;
    }
  }

  &__count {
    font-size: $font-size-sm;
    color: $color-gray-500;
  }
}
</style>
