<template>
  <div class="social-login">
    <button class="social-login__btn social-login__btn--kakao" @click="socialLogin('kakao')">
      카카오로 시작하기
    </button>
    <button class="social-login__btn social-login__btn--naver" @click="socialLogin('naver')">
      네이버로 시작하기
    </button>
    <button class="social-login__btn social-login__btn--google" @click="socialLogin('google')">
      Google로 시작하기
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

const router = useRouter()
const { login } = useAuthStore()

const socialLogin = (provider) => {
  login(`user@${provider}.com`, 'mock')
  router.push('/')
}
</script>

<style lang="scss" scoped>
.social-login {
  display: flex;
  flex-direction: column;
  gap: $spacing-sm;

  &__btn {
    @include button-base;
    width: 100%;
    padding: 12px;
    border-radius: $border-radius-md;
    font-size: $font-size-sm;

    &--kakao {
      background: #FEE500;
      color: #3C1E1E;

      &:hover { background: #F0D800; }
    }

    &--naver {
      background: #03C75A;
      color: $color-white;

      &:hover { background: #02B350; }
    }

    &--google {
      background: $color-white;
      color: $color-gray-700;
      border: 1px solid $border-color;

      &:hover { background: $color-gray-100; }
    }
  }
}
</style>
