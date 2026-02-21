<template>
  <div class="order-complete">
    <div class="order-complete__icon">✓</div>
    <h2>수강신청이 완료되었습니다!</h2>
    <p class="order-complete__order-no">주문번호: {{ orderNumber }}</p>
    <div class="order-complete__courses">
      <p v-for="course in courses" :key="course.id">{{ course.title }}</p>
    </div>
    <router-link to="/" class="order-complete__btn">홈으로 이동</router-link>
  </div>
</template>

<script setup>
defineProps({
  orderNumber: { type: String, default: '' },
  courses: { type: Array, default: () => [] }
})
</script>

<style lang="scss" scoped>
.order-complete {
  text-align: center;
  padding: $spacing-3xl $spacing-lg;

  &__icon {
    width: 80px;
    height: 80px;
    margin: 0 auto $spacing-lg;
    @include flex-center;
    background: $color-success;
    color: $color-white;
    font-size: $font-size-3xl;
    border-radius: 50%;
  }

  h2 {
    font-size: $font-size-2xl;
    margin-bottom: $spacing-md;
  }

  &__order-no {
    color: $color-gray-500;
    margin-bottom: $spacing-lg;
  }

  &__courses {
    padding: $spacing-md;
    background: $color-gray-100;
    border-radius: $border-radius-md;
    margin-bottom: $spacing-xl;

    p {
      padding: $spacing-xs 0;
      font-size: $font-size-sm;
      color: $color-gray-700;
    }
  }

  &__btn {
    @include button-base;
    background: $color-primary;
    color: $color-white;
    padding: 14px 32px;
    border-radius: $border-radius-md;

    &:hover { background: $color-primary-dark; }
  }
}
</style>
