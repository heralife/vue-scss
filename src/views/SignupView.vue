<template>
  <div class="signup-page">
    <div class="signup-page__container">
      <div class="signup-page__box">
        <h1 class="signup-page__title">회원가입</h1>
        <SignupForm />
        <div class="signup-page__divider">
          <span>또는</span>
        </div>
        <SocialLoginButtons />
        <p class="signup-page__login-link">
          이미 계정이 있으신가요? <router-link to="/login">로그인</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import SignupForm from '@/components/auth/SignupForm.vue'
import SocialLoginButtons from '@/components/auth/SocialLoginButtons.vue'
</script>

<style lang="scss" scoped>
.signup-page {
  padding: $spacing-3xl 0;
  background: $color-gray-100;
  min-height: calc(100vh - $header-height - 200px);
  @include flex-center;

  &__container {
    width: 100%;
    max-width: 480px;
    padding: 0 $spacing-md;
  }

  &__box {
    background: $color-white;
    border-radius: $border-radius-lg;
    padding: $spacing-2xl;
    box-shadow: $shadow-md;
  }

  &__title {
    font-size: $font-size-2xl;
    text-align: center;
    margin-bottom: $spacing-xl;
  }

  &__divider {
    display: flex;
    align-items: center;
    margin: $spacing-lg 0;
    color: $color-gray-500;
    font-size: $font-size-sm;

    &::before, &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: $border-color;
    }

    span {
      padding: 0 $spacing-md;
    }
  }

  &__login-link {
    text-align: center;
    margin-top: $spacing-lg;
    font-size: $font-size-sm;
    color: $color-gray-500;

    a {
      color: $color-primary;
      font-weight: $font-weight-semibold;
    }
  }
}
</style>
