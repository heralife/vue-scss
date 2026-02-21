<template>
  <div class="payment-method">
    <h3>결제 수단</h3>
    <div class="payment-method__options">
      <label
        v-for="method in methods"
        :key="method.key"
        :class="['payment-method__option', { 'payment-method__option--active': modelValue === method.key }]"
      >
        <input type="radio" :value="method.key" :checked="modelValue === method.key" @change="$emit('update:modelValue', method.key)" />
        <span>{{ method.label }}</span>
      </label>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: { type: String, default: 'credit-card' }
})

defineEmits(['update:modelValue'])

const methods = [
  { key: 'credit-card', label: '신용카드' },
  { key: 'bank-transfer', label: '무통장입금' },
  { key: 'kakao-pay', label: '카카오페이' },
  { key: 'naver-pay', label: '네이버페이' }
]
</script>

<style lang="scss" scoped>
.payment-method {
  background: $color-white;
  border: 1px solid $border-color;
  border-radius: $border-radius-md;
  padding: $spacing-lg;

  h3 {
    font-size: $font-size-lg;
    margin-bottom: $spacing-md;
  }

  &__options {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-sm;

    @include respond-to('sm') {
      grid-template-columns: 1fr;
    }
  }

  &__option {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    padding: $spacing-md;
    border: 1px solid $border-color;
    border-radius: $border-radius-md;
    cursor: pointer;
    font-size: $font-size-sm;
    transition: all $transition-fast;

    input { accent-color: $color-primary; }

    &--active {
      border-color: $color-primary;
      background: rgba($color-primary, 0.02);
    }
  }
}
</style>
