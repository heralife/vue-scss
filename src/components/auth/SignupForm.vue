<template>
  <form class="signup-form" @submit.prevent="handleSignup">
    <div class="signup-form__field">
      <label>이름</label>
      <input type="text" v-model="form.name" placeholder="이름을 입력하세요" />
      <span v-if="errors.name" class="signup-form__error">{{ errors.name }}</span>
    </div>

    <div class="signup-form__field">
      <label>이메일</label>
      <input type="email" v-model="form.email" placeholder="이메일을 입력하세요" />
      <span v-if="errors.email" class="signup-form__error">{{ errors.email }}</span>
    </div>

    <div class="signup-form__field">
      <label>비밀번호</label>
      <input type="password" v-model="form.password" placeholder="8자 이상, 영문+숫자 조합" />
      <div v-if="form.password" class="signup-form__strength">
        <div class="signup-form__strength-bar">
          <div
            :style="{ width: (strength.level / 3 * 100) + '%', background: strength.color }"
          ></div>
        </div>
        <span :style="{ color: strength.color }">{{ strength.label }}</span>
      </div>
      <span v-if="errors.password" class="signup-form__error">{{ errors.password }}</span>
    </div>

    <div class="signup-form__field">
      <label>비밀번호 확인</label>
      <input type="password" v-model="form.passwordConfirm" placeholder="비밀번호를 다시 입력하세요" />
      <span v-if="errors.passwordConfirm" class="signup-form__error">{{ errors.passwordConfirm }}</span>
    </div>

    <div class="signup-form__field">
      <label>전화번호</label>
      <input type="tel" v-model="form.phone" placeholder="010-0000-0000" />
      <span v-if="errors.phone" class="signup-form__error">{{ errors.phone }}</span>
    </div>

    <div class="signup-form__agreements">
      <label class="signup-form__agree signup-form__agree--all">
        <input type="checkbox" v-model="agreeAll" @change="toggleAll" />
        <span>전체 동의</span>
      </label>
      <label class="signup-form__agree">
        <input type="checkbox" v-model="form.agreeTerms" />
        <span>이용약관 동의 (필수)</span>
      </label>
      <label class="signup-form__agree">
        <input type="checkbox" v-model="form.agreePrivacy" />
        <span>개인정보 수집·이용 동의 (필수)</span>
      </label>
      <label class="signup-form__agree">
        <input type="checkbox" v-model="form.agreeMarketing" />
        <span>마케팅 정보 수신 동의 (선택)</span>
      </label>
    </div>

    <button type="submit" class="signup-form__submit">가입하기</button>
  </form>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import { validateEmail, validatePassword, validatePhone, getPasswordStrength } from '@/utils/validators'

const router = useRouter()
const { signup } = useAuthStore()

const form = reactive({
  name: '', email: '', password: '', passwordConfirm: '', phone: '',
  agreeTerms: false, agreePrivacy: false, agreeMarketing: false
})

const errors = reactive({
  name: '', email: '', password: '', passwordConfirm: '', phone: ''
})

const agreeAll = ref(false)

const strength = computed(() => getPasswordStrength(form.password))

const toggleAll = () => {
  form.agreeTerms = agreeAll.value
  form.agreePrivacy = agreeAll.value
  form.agreeMarketing = agreeAll.value
}

const handleSignup = () => {
  Object.keys(errors).forEach(k => errors[k] = '')

  if (!form.name) errors.name = '이름을 입력하세요'
  if (!form.email) errors.email = '이메일을 입력하세요'
  else if (!validateEmail(form.email)) errors.email = '올바른 이메일 형식이 아닙니다'
  if (!form.password) errors.password = '비밀번호를 입력하세요'
  else if (!validatePassword(form.password)) errors.password = '8자 이상, 영문+숫자 조합이어야 합니다'
  if (form.password !== form.passwordConfirm) errors.passwordConfirm = '비밀번호가 일치하지 않습니다'
  if (form.phone && !validatePhone(form.phone)) errors.phone = '올바른 전화번호 형식이 아닙니다'

  if (Object.values(errors).some(e => e)) return
  if (!form.agreeTerms || !form.agreePrivacy) {
    alert('필수 약관에 동의해주세요.')
    return
  }

  signup({ name: form.name, email: form.email })
  router.push('/')
}
</script>

<style lang="scss" scoped>
.signup-form {
  &__field {
    margin-bottom: $spacing-md;

    label {
      display: block;
      font-size: $font-size-sm;
      font-weight: $font-weight-medium;
      margin-bottom: $spacing-xs;
      color: $color-gray-700;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"],
    input[type="tel"] {
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

  &__error {
    display: block;
    margin-top: 4px;
    font-size: $font-size-xs;
    color: $color-error;
  }

  &__strength {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    margin-top: $spacing-xs;
    font-size: $font-size-xs;
  }

  &__strength-bar {
    flex: 1;
    height: 4px;
    background: $color-gray-200;
    border-radius: 2px;
    overflow: hidden;

    div {
      height: 100%;
      transition: width $transition-base;
      border-radius: 2px;
    }
  }

  &__agreements {
    margin: $spacing-lg 0;
    padding: $spacing-md;
    background: $color-gray-100;
    border-radius: $border-radius-md;
  }

  &__agree {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    padding: 6px 0;
    font-size: $font-size-sm;
    color: $color-gray-700;
    cursor: pointer;

    input {
      accent-color: $color-primary;
    }

    &--all {
      font-weight: $font-weight-bold;
      color: $color-black;
      padding-bottom: $spacing-sm;
      margin-bottom: $spacing-xs;
      border-bottom: 1px solid $border-color;
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
