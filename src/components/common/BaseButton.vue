<template>
  <button
    class="base-button"
    :class="[`base-button--${variant}`, `base-button--${size}`, { 'base-button--disabled': disabled, 'base-button--loading': loading }]"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" class="base-button__spinner" />
    <span class="base-button__content" :class="{ 'base-button__content--hidden': loading }">
      <slot />
    </span>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'outline', 'text'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['click']);
</script>

<style lang="scss" scoped>
.base-button {
  @include button-base;
  position: relative;
  font-family: $font-family-primary;
  font-weight: $font-weight-semibold;
  border-radius: $border-radius-md;
  transition: all $transition-fast;
  cursor: pointer;
  border: 2px solid transparent;

  &--sm {
    padding: $spacing-xs $spacing-sm;
    font-size: $font-size-sm;
  }

  &--md {
    padding: $spacing-sm $spacing-lg;
    font-size: $font-size-base;
  }

  &--lg {
    padding: $spacing-md $spacing-xl;
    font-size: $font-size-md;
  }

  &--primary {
    background-color: $color-primary;
    color: $color-white;
    border-color: $color-primary;

    &:hover:not(:disabled) {
      background-color: $color-primary-dark;
      border-color: $color-primary-dark;
    }
  }

  &--secondary {
    background-color: $color-secondary;
    color: $color-white;

    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  }

  &--outline {
    background-color: transparent;
    color: $color-primary;
    border-color: $color-primary;

    &:hover:not(:disabled) {
      background-color: $color-primary;
      color: $color-white;
    }
  }

  &--text {
    background-color: transparent;
    color: $color-primary;
    border-color: transparent;

    &:hover:not(:disabled) {
      background-color: $color-gray-100;
    }
  }

  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &--loading {
    cursor: wait;
  }

  &__spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1em;
    height: 1em;
    border: 2px solid currentColor;
    border-right-color: transparent;
    border-radius: $border-radius-full;
    animation: spin 0.6s linear infinite;
  }

  &__content {
    display: inline-flex;
    align-items: center;
    gap: $spacing-xs;

    &--hidden {
      visibility: hidden;
    }
  }
}

@keyframes spin {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
