<template>
  <div class="base-input" :class="{ 'base-input--error': error }">
    <label v-if="label" class="base-input__label">{{ label }}</label>
    <input
      class="base-input__field"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <span v-if="error" class="base-input__error">{{ error }}</span>
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'text',
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
});

defineEmits(['update:modelValue']);
</script>

<style lang="scss" scoped>
.base-input {
  display: flex;
  flex-direction: column;
  gap: $spacing-xs;

  &__label {
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    color: $color-gray-700;
  }

  &__field {
    width: 100%;
    padding: $spacing-sm $spacing-md;
    font-size: $font-size-base;
    font-family: $font-family-primary;
    color: $color-gray-900;
    background-color: $color-white;
    border: 1px solid $border-color;
    border-radius: $border-radius-md;
    outline: none;
    transition: border-color $transition-fast, box-shadow $transition-fast;
    line-height: $line-height-base;

    &::placeholder {
      color: $color-gray-500;
    }

    &:focus {
      border-color: $color-primary;
      box-shadow: 0 0 0 3px rgba($color-primary, 0.15);
    }
  }

  &--error &__field {
    border-color: $color-error;

    &:focus {
      box-shadow: 0 0 0 3px rgba($color-error, 0.15);
    }
  }

  &__error {
    font-size: $font-size-xs;
    color: $color-error;
  }
}
</style>
