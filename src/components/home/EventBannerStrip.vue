<template>
  <section class="event-banner-strip">
    <router-link to="/events" class="event-banner-strip__link">
      <div class="event-banner-strip__content">
        <span class="event-banner-strip__badge">EVENT</span>
        <span class="event-banner-strip__text">2월 한정! 전 강의 20% 할인 이벤트 진행중</span>
        <span class="event-banner-strip__arrow">→</span>
      </div>
    </router-link>
  </section>
</template>

<style lang="scss" scoped>
.event-banner-strip {
  &__link {
    display: block;
    background: linear-gradient(135deg, $color-accent, #FF8533);
    padding: $spacing-lg 0;
    transition: opacity $transition-fast;

    &:hover {
      opacity: 0.95;
    }
  }

  &__content {
    @include container;
    @include flex-center;
    gap: $spacing-md;
    color: $color-white;
  }

  &__badge {
    padding: 4px 12px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: $border-radius-full;
    font-size: $font-size-xs;
    font-weight: $font-weight-bold;
  }

  &__text {
    font-size: $font-size-lg;
    font-weight: $font-weight-semibold;

    @include respond-to('md') {
      font-size: $font-size-base;
    }
  }

  &__arrow {
    font-size: $font-size-xl;
  }
}
</style>
