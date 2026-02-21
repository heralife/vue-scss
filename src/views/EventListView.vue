<template>
  <div class="event-list">
    <div class="event-list__container">
      <h1 class="event-list__title">이벤트 / 혜택</h1>

      <div class="event-list__tabs">
        <button
          v-for="tab in statusTabs"
          :key="tab.key"
          :class="['event-list__tab', { 'event-list__tab--active': activeStatus === tab.key }]"
          @click="activeStatus = tab.key"
        >
          {{ tab.label }}
        </button>
      </div>

      <div class="event-list__grid">
        <EventCard
          v-for="event in filteredEvents"
          :key="event.id"
          :event="event"
        />
      </div>

      <p v-if="filteredEvents.length === 0" class="event-list__empty">
        해당 이벤트가 없습니다.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useEvents } from '@/composables/useEvents'
import EventCard from '@/components/event/EventCard.vue'

const { allEvents } = useEvents()
const activeStatus = ref('all')

const statusTabs = [
  { key: 'all', label: '전체' },
  { key: 'active', label: '진행중' },
  { key: 'ended', label: '종료' }
]

const filteredEvents = computed(() => {
  if (activeStatus.value === 'all') return allEvents.value
  return allEvents.value.filter(e => e.status === activeStatus.value)
})
</script>

<style lang="scss" scoped>
.event-list {
  padding: $spacing-xl 0 $spacing-3xl;

  &__container {
    @include container;
  }

  &__title {
    font-size: $font-size-2xl;
    margin-bottom: $spacing-xl;
  }

  &__tabs {
    display: flex;
    gap: $spacing-sm;
    margin-bottom: $spacing-xl;
  }

  &__tab {
    @include button-base;
    padding: 8px 20px;
    background: $color-gray-100;
    color: $color-gray-700;
    border-radius: $border-radius-full;

    &--active {
      background: $color-primary;
      color: $color-white;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $spacing-lg;

    @include respond-to('lg') {
      grid-template-columns: repeat(2, 1fr);
    }

    @include respond-to('md') {
      grid-template-columns: 1fr;
    }
  }

  &__empty {
    text-align: center;
    padding: $spacing-3xl;
    color: $color-gray-500;
  }
}
</style>
