<template>
  <router-link :to="`/events/${event.id}`" class="event-card">
    <div class="event-card__banner" :style="{ background: event.color }">
      <h3>{{ event.title }}</h3>
    </div>
    <div class="event-card__body">
      <span :class="['event-card__status', `event-card__status--${event.status}`]">
        {{ event.status === 'active' ? '진행중' : '종료' }}
      </span>
      <span class="event-card__period">{{ event.startDate }} ~ {{ event.endDate }}</span>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  event: { type: Object, required: true }
})
</script>

<style lang="scss" scoped>
.event-card {
  @include card-base;
  display: block;

  &__banner {
    aspect-ratio: 2/1;
    @include flex-center;
    padding: $spacing-md;

    h3 {
      color: $color-white;
      font-size: $font-size-lg;
      text-align: center;
    }
  }

  &__body {
    padding: $spacing-md;
    display: flex;
    align-items: center;
    gap: $spacing-sm;
  }

  &__status {
    padding: 3px 10px;
    border-radius: $border-radius-full;
    font-size: $font-size-xs;
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
    font-size: $font-size-xs;
    color: $color-gray-500;
  }
}
</style>
