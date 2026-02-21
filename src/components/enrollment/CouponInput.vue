<template>
  <div class="coupon-input">
    <h3>쿠폰</h3>
    <div class="coupon-input__row">
      <input
        type="text"
        v-model="code"
        placeholder="쿠폰 코드를 입력하세요"
        class="coupon-input__field"
      />
      <button class="coupon-input__btn" @click="$emit('apply', code)">적용</button>
    </div>
    <p v-if="discount > 0" class="coupon-input__applied">쿠폰이 적용되었습니다 (-{{ formatPrice(discount) }}원)</p>
    <p class="coupon-input__hint">테스트 코드: HACKERS2026</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { formatPrice } from '@/utils/formatters'

defineProps({
  discount: { type: Number, default: 0 }
})

defineEmits(['apply'])

const code = ref('')
</script>

<style lang="scss" scoped>
.coupon-input {
  background: $color-white;
  border: 1px solid $border-color;
  border-radius: $border-radius-md;
  padding: $spacing-lg;

  h3 {
    font-size: $font-size-lg;
    margin-bottom: $spacing-md;
  }

  &__row {
    display: flex;
    gap: $spacing-sm;
  }

  &__field {
    flex: 1;
    padding: 10px 12px;
    border: 1px solid $border-color;
    border-radius: $border-radius-sm;
    font-size: $font-size-sm;

    &:focus {
      outline: none;
      border-color: $color-primary;
    }
  }

  &__btn {
    @include button-base;
    background: $color-secondary;
    color: $color-white;
    padding: 10px 20px;
    font-size: $font-size-sm;
    border-radius: $border-radius-sm;

    &:hover { background: $color-secondary-dark; }
  }

  &__applied {
    margin-top: $spacing-sm;
    font-size: $font-size-sm;
    color: $color-success;
    font-weight: $font-weight-medium;
  }

  &__hint {
    margin-top: $spacing-xs;
    font-size: $font-size-xs;
    color: $color-gray-500;
  }
}
</style>
