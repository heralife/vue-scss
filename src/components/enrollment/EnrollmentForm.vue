<template>
  <div class="enrollment-form">
    <h3>약관 동의</h3>
    <label class="enrollment-form__agree enrollment-form__agree--all">
      <input type="checkbox" :checked="allChecked" @change="toggleAll" />
      <span>전체 동의</span>
    </label>
    <label class="enrollment-form__agree">
      <input type="checkbox" :checked="agreements.terms" @change="toggle('terms')" />
      <span>이용약관 동의 (필수)</span>
    </label>
    <label class="enrollment-form__agree">
      <input type="checkbox" :checked="agreements.privacy" @change="toggle('privacy')" />
      <span>개인정보 수집·이용 동의 (필수)</span>
    </label>
    <label class="enrollment-form__agree">
      <input type="checkbox" :checked="agreements.refund" @change="toggle('refund')" />
      <span>환불규정 동의 (필수)</span>
    </label>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  agreements: { type: Object, required: true }
})

const emit = defineEmits(['update:agreements'])

const allChecked = computed(() =>
  props.agreements.terms && props.agreements.privacy && props.agreements.refund
)

const toggleAll = (e) => {
  const val = e.target.checked
  emit('update:agreements', { all: val, terms: val, privacy: val, refund: val })
}

const toggle = (key) => {
  const updated = { ...props.agreements, [key]: !props.agreements[key] }
  updated.all = updated.terms && updated.privacy && updated.refund
  emit('update:agreements', updated)
}
</script>

<style lang="scss" scoped>
.enrollment-form {
  background: $color-white;
  border: 1px solid $border-color;
  border-radius: $border-radius-md;
  padding: $spacing-lg;

  h3 {
    font-size: $font-size-lg;
    margin-bottom: $spacing-md;
  }

  &__agree {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    padding: 8px 0;
    font-size: $font-size-sm;
    color: $color-gray-700;
    cursor: pointer;

    input { accent-color: $color-primary; }

    &--all {
      font-weight: $font-weight-bold;
      color: $color-black;
      padding-bottom: $spacing-sm;
      margin-bottom: $spacing-xs;
      border-bottom: 1px solid $border-color;
    }
  }
}
</style>
