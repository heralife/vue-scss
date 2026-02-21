<template>
  <header class="header">
    <div class="header__container">
      <router-link to="/" class="header__logo">
        <span class="header__logo-text">해커스<em>교육</em></span>
      </router-link>

      <nav class="header__nav" :class="{ 'header__nav--open': mobileMenuOpen }">
        <router-link to="/courses/language" class="header__nav-link" @click="closeMobile">어학</router-link>
        <router-link to="/courses/certification" class="header__nav-link" @click="closeMobile">자격증</router-link>
        <router-link to="/courses/employment" class="header__nav-link" @click="closeMobile">취업</router-link>
        <router-link to="/events" class="header__nav-link" @click="closeMobile">이벤트</router-link>
      </nav>

      <div class="header__search">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="강의 검색..."
          class="header__search-input"
          @keyup.enter="handleSearch"
        />
        <button class="header__search-btn" @click="handleSearch" aria-label="검색">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
        </button>
      </div>

      <div class="header__actions">
        <template v-if="auth.state.isLoggedIn">
          <router-link to="/enrollment" class="header__cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <span v-if="cart.itemCount.value > 0" class="header__cart-badge">{{ cart.itemCount.value }}</span>
          </router-link>
          <span class="header__user-name">{{ auth.state.user?.name }}님</span>
          <button class="header__logout-btn" @click="handleLogout">로그아웃</button>
        </template>
        <template v-else>
          <router-link to="/login" class="header__auth-btn">로그인</router-link>
          <router-link to="/signup" class="header__auth-btn header__auth-btn--signup">회원가입</router-link>
        </template>
      </div>

      <button
        class="header__mobile-toggle"
        @click="mobileMenuOpen = !mobileMenuOpen"
        aria-label="메뉴"
      >
        <span></span><span></span><span></span>
      </button>
    </div>

    <CategoryNav />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import { useCartStore } from '@/stores/cartStore'
import CategoryNav from './CategoryNav.vue'

const router = useRouter()
const auth = useAuthStore()
const cart = useCartStore()

const searchQuery = ref('')
const mobileMenuOpen = ref(false)

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ name: 'CourseList', query: { q: searchQuery.value } })
    searchQuery.value = ''
    closeMobile()
  }
}

const handleLogout = () => {
  auth.logout()
  router.push('/')
}

const closeMobile = () => {
  mobileMenuOpen.value = false
}
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: $z-header;
  background: $color-white;
  box-shadow: $shadow-sm;

  &__container {
    @include container;
    @include flex-between;
    height: $header-height;
    gap: $spacing-md;
  }

  &__logo {
    flex-shrink: 0;
  }

  &__logo-text {
    font-size: $font-size-xl;
    font-weight: $font-weight-bold;
    color: $color-primary;

    em {
      font-style: normal;
      color: $color-secondary;
    }
  }

  &__nav {
    display: flex;
    gap: $spacing-lg;

    @include respond-to('lg') {
      display: none;
      position: absolute;
      top: $header-height;
      left: 0;
      right: 0;
      background: $color-white;
      flex-direction: column;
      padding: $spacing-md;
      box-shadow: $shadow-md;

      &--open {
        display: flex;
      }
    }
  }

  &__nav-link {
    font-weight: $font-weight-medium;
    color: $color-gray-900;
    padding: $spacing-xs 0;
    transition: color $transition-fast;

    &:hover,
    &.router-link-active {
      color: $color-primary;
    }
  }

  &__search {
    display: flex;
    align-items: center;
    background: $color-gray-100;
    border-radius: $border-radius-full;
    padding: 0 $spacing-sm;
    flex: 1;
    max-width: 320px;

    @include respond-to('md') {
      display: none;
    }
  }

  &__search-input {
    flex: 1;
    padding: 8px 12px;
    border: none;
    background: transparent;
    outline: none;
    font-size: $font-size-sm;
  }

  &__search-btn {
    @include flex-center;
    padding: 4px;
    color: $color-gray-500;

    &:hover {
      color: $color-primary;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    flex-shrink: 0;

    @include respond-to('md') {
      gap: $spacing-xs;
    }
  }

  &__cart {
    position: relative;
    @include flex-center;
    width: 36px;
    height: 36px;
    color: $color-gray-700;

    &:hover {
      color: $color-primary;
    }
  }

  &__cart-badge {
    position: absolute;
    top: 0;
    right: 0;
    width: 18px;
    height: 18px;
    background: $color-primary;
    color: $color-white;
    font-size: 11px;
    font-weight: $font-weight-bold;
    border-radius: 50%;
    @include flex-center;
  }

  &__user-name {
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    color: $color-gray-700;

    @include respond-to('md') {
      display: none;
    }
  }

  &__auth-btn {
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    color: $color-gray-700;
    padding: 6px 12px;

    &:hover {
      color: $color-primary;
    }

    &--signup {
      background: $color-primary;
      color: $color-white;
      border-radius: $border-radius-sm;

      &:hover {
        background: $color-primary-dark;
        color: $color-white;
      }
    }
  }

  &__logout-btn {
    font-size: $font-size-sm;
    color: $color-gray-500;
    padding: 6px 12px;

    &:hover {
      color: $color-primary;
    }
  }

  &__mobile-toggle {
    display: none;
    flex-direction: column;
    gap: 4px;
    padding: 8px;

    span {
      display: block;
      width: 20px;
      height: 2px;
      background: $color-gray-900;
      transition: all $transition-fast;
    }

    @include respond-to('lg') {
      display: flex;
    }
  }
}
</style>
