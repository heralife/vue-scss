<template>
  <div class="base-tab">
    <div class="base-tab__header">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        class="base-tab__button"
        :class="{ 'base-tab__button--active': modelValue === tab.key }"
        @click="$emit('update:modelValue', tab.key)"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="base-tab__content">
      <slot :name="modelValue" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
});

defineEmits(['update:modelValue']);
</script>

<style lang="scss" scoped>
.base-tab {
  &__header {
    display: flex;
    border-bottom: 2px solid $color-gray-200;
    gap: $spacing-xs;
  }

  &__button {
    padding: $spacing-sm $spacing-lg;
    font-size: $font-size-base;
    font-weight: $font-weight-medium;
    font-family: $font-family-primary;
    color: $color-gray-500;
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    margin-bottom: -2px;
    cursor: pointer;
    transition: color $transition-fast, border-color $transition-fast;

    &:hover {
      color: $color-gray-700;
    }

    &--active {
      color: $color-primary;
      border-bottom-color: $color-primary;
    }
  }

  &__content {
    padding: $spacing-lg 0;
  }
}
</style>
