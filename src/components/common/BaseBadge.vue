<template>
  <span class="base-badge" :class="`base-badge--${variant}`">
    <slot>{{ defaultLabel }}</slot>
  </span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'new',
    validator: (v) => ['best', 'new', 'discount', 'free'].includes(v),
  },
});

const defaultLabel = computed(() => {
  const labels = {
    best: 'BEST',
    new: 'NEW',
    discount: 'SALE',
    free: 'FREE',
  };
  return labels[props.variant];
});
</script>

<style lang="scss" scoped>
.base-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px $spacing-sm;
  font-size: $font-size-xs;
  font-weight: $font-weight-bold;
  border-radius: $border-radius-full;
  line-height: $line-height-tight;
  white-space: nowrap;

  &--best {
    background-color: $color-primary;
    color: $color-white;
  }

  &--new {
    background-color: $color-success;
    color: $color-white;
  }

  &--discount {
    background-color: $color-error;
    color: $color-white;
  }

  &--free {
    background-color: $color-accent;
    color: $color-white;
  }
}
</style>
