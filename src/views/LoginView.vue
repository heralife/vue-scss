<template>
  <div class="login-page">
    <div class="login-page__container">
      <div class="login-page__box">
        <h1 class="login-page__title">로그인</h1>
        <LoginForm />
        <div class="login-page__divider">
          <span>또는</span>
        </div>
        <SocialLoginButtons />
        <div class="login-page__links">
          <router-link to="/signup">회원가입</router-link>
          <span>|</span>
          <a href="#" @click.prevent>아이디/비밀번호 찾기</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoginForm from '@/components/auth/LoginForm.vue'
import SocialLoginButtons from '@/components/auth/SocialLoginButtons.vue'
</script>

<style lang="scss" scoped>
.login-page {
  padding: $spacing-3xl 0;
  background: $color-gray-100;
  min-height: calc(100vh - $header-height - 200px);
  @include flex-center;

  &__container {
    width: 100%;
    max-width: 440px;
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

  &__links {
    text-align: center;
    margin-top: $spacing-lg;
    font-size: $font-size-sm;
    color: $color-gray-500;

    a {
      color: $color-gray-700;

      &:hover {
        color: $color-primary;
      }
    }

    span {
      margin: 0 $spacing-sm;
    }
  }
}
</style>
