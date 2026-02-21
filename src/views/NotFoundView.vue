<template>
  <div class="not-found">
    <h1>404</h1>
    <p>페이지를 찾을 수 없습니다</p>
    <router-link to="/" class="not-found__btn">홈으로 돌아가기</router-link>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  @include flex-center;
  flex-direction: column;
  min-height: 60vh;
  text-align: center;

  h1 {
    font-size: 80px;
    color: $color-primary;
    line-height: 1;
  }

  p {
    font-size: $font-size-lg;
    color: $color-gray-500;
    margin: $spacing-md 0 $spacing-xl;
  }

  &__btn {
    @include button-base;
    background: $color-primary;
    color: $color-white;
    border-radius: $border-radius-md;

    &:hover {
      background: $color-primary-dark;
    }
  }
}
</style>
