<template>
  <div class="top-banner" v-if="!dismissed">
    <div class="top-banner__content">
      <span>{{ bannerText }}</span>
      <router-link to="/events" class="top-banner__link">자세히 보기</router-link>
    </div>
    <button class="top-banner__close" @click="dismiss" aria-label="배너 닫기">&times;</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const bannerText = '2월 신규 수강생 전 강의 20% 할인!'
const dismissed = ref(sessionStorage.getItem('topBannerDismissed') === 'true')

const dismiss = () => {
  dismissed.value = true
  sessionStorage.setItem('topBannerDismissed', 'true')
}
</script>

<style lang="scss" scoped>
.top-banner {
  background: $color-primary;
  color: $color-white;
  padding: 8px $spacing-md;
  @include flex-center;
  position: relative;
  font-size: $font-size-sm;

  &__content {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
  }

  &__link {
    color: $color-white;
    text-decoration: underline;
    font-weight: $font-weight-semibold;
  }

  &__close {
    position: absolute;
    right: $spacing-md;
    color: $color-white;
    font-size: $font-size-xl;
    line-height: 1;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
