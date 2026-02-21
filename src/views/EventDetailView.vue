<template>
  <div class="event-detail" v-if="event">
    <div class="event-detail__container">
      <BaseBreadcrumb :items="[{ label: '홈', to: '/' }, { label: '이벤트', to: '/events' }, { label: event.title }]" />

      <div class="event-detail__banner">
        <div class="event-detail__banner-placeholder" :style="{ background: event.color || '#FF6B00' }">
          <h1>{{ event.title }}</h1>
        </div>
      </div>

      <div class="event-detail__info">
        <span :class="['event-detail__status', `event-detail__status--${event.status}`]">
          {{ event.status === 'active' ? '진행중' : '종료' }}
        </span>
        <span class="event-detail__period">{{ event.startDate }} ~ {{ event.endDate }}</span>
      </div>

      <div class="event-detail__content" v-html="event.description"></div>

      <div class="event-detail__actions">
        <router-link to="/events" class="event-detail__back-btn">목록으로</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useEvents } from '@/composables/useEvents'
import BaseBreadcrumb from '@/components/common/BaseBreadcrumb.vue'

const route = useRoute()
const { getEventById } = useEvents()
const event = computed(() => getEventById(route.params.id))
</script>

<style lang="scss" scoped>
.event-detail {
  padding: $spacing-xl 0 $spacing-3xl;

  &__container {
    @include container;
    max-width: 900px;
  }

  &__banner-placeholder {
    width: 100%;
    aspect-ratio: 2/1;
    border-radius: $border-radius-md;
    @include flex-center;
    margin-top: $spacing-lg;

    h1 {
      color: $color-white;
      font-size: $font-size-2xl;
      text-align: center;
    }
  }

  &__info {
    display: flex;
    align-items: center;
    gap: $spacing-md;
    margin-top: $spacing-lg;
  }

  &__status {
    padding: 4px 12px;
    border-radius: $border-radius-full;
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;

    &--active {
      background: #E8F5E9;
      color: $color-success;
    }

    &--ended {
      background: $color-gray-100;
      color: $color-gray-500;
    }
  }

  &__period {
    color: $color-gray-500;
    font-size: $font-size-sm;
  }

  &__content {
    margin-top: $spacing-xl;
    line-height: $line-height-base;
  }

  &__actions {
    margin-top: $spacing-xl;
    text-align: center;
  }

  &__back-btn {
    @include button-base;
    background: $color-gray-100;
    color: $color-gray-700;
    padding: 12px 32px;

    &:hover {
      background: $color-gray-200;
    }
  }
}
</style>
