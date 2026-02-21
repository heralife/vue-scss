<template>
  <form class="login-form" @submit.prevent="handleLogin">
    <div class="login-form__field">
      <label for="login-email">이메일</label>
      <input
        id="login-email"
        type="email"
        v-model="email"
        placeholder="이메일을 입력하세요"
        :class="{ 'login-form__input--error': errors.email }"
      />
      <span v-if="errors.email" class="login-form__error">{{ errors.email }}</span>
    </div>

    <div class="login-form__field">
      <label for="login-password">비밀번호</label>
      <input
        id="login-password"
        type="password"
        v-model="password"
        placeholder="비밀번호를 입력하세요"
        :class="{ 'login-form__input--error': errors.password }"
      />
      <span v-if="errors.password" class="login-form__error">{{ errors.password }}</span>
    </div>

    <label class="login-form__remember">
      <input type="checkbox" v-model="rememberMe" />
      <span>로그인 상태 유지</span>
    </label>

    <button type="submit" class="login-form__submit">로그인</button>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import { validateEmail } from '@/utils/validators'

const router = useRouter()
const route = useRoute()
const { login } = useAuthStore()

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const errors = reactive({ email: '', password: '' })

const handleLogin = () => {
  errors.email = ''
  errors.password = ''

  if (!email.value) {
    errors.email = '이메일을 입력하세요'
    return
  }
  if (!validateEmail(email.value)) {
    errors.email = '올바른 이메일 형식이 아닙니다'
    return
  }
  if (!password.value) {
    errors.password = '비밀번호를 입력하세요'
    return
  }

  login(email.value, password.value)
  const redirect = route.query.redirect || '/'
  router.push(redirect)
}
</script>

<style lang="scss" scoped>
.login-form {
  &__field {
    margin-bottom: $spacing-md;

    label {
      display: block;
      font-size: $font-size-sm;
      font-weight: $font-weight-medium;
      margin-bottom: $spacing-xs;
      color: $color-gray-700;
    }

    input {
      width: 100%;
      padding: 12px;
      border: 1px solid $border-color;
      border-radius: $border-radius-sm;
      font-size: $font-size-base;
      transition: border-color $transition-fast;

      &:focus {
        outline: none;
        border-color: $color-primary;
      }
    }
  }

  &__input--error {
    border-color: $color-error !important;
  }

  &__error {
    display: block;
    margin-top: 4px;
    font-size: $font-size-xs;
    color: $color-error;
  }

  &__remember {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    margin-bottom: $spacing-lg;
    font-size: $font-size-sm;
    color: $color-gray-700;
    cursor: pointer;

    input {
      accent-color: $color-primary;
    }
  }

  &__submit {
    @include button-base;
    width: 100%;
    background: $color-primary;
    color: $color-white;
    padding: 14px;
    font-size: $font-size-md;
    border-radius: $border-radius-md;

    &:hover {
      background: $color-primary-dark;
    }
  }
}
</style>
