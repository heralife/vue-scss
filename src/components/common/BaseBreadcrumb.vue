<template>
  <nav class="base-breadcrumb" aria-label="Breadcrumb">
    <ol class="base-breadcrumb__list">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="base-breadcrumb__item"
      >
        <router-link
          v-if="item.to && index < items.length - 1"
          :to="item.to"
          class="base-breadcrumb__link"
        >
          {{ item.label }}
        </router-link>
        <span v-else class="base-breadcrumb__text">{{ item.label }}</span>
        <span v-if="index < items.length - 1" class="base-breadcrumb__separator">/</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.base-breadcrumb {
  &__list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: $spacing-xs;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: $spacing-xs;
    font-size: $font-size-sm;
  }

  &__link {
    color: $color-gray-500;
    text-decoration: none;
    transition: color $transition-fast;

    &:hover {
      color: $color-primary;
    }
  }

  &__text {
    color: $color-gray-900;
    font-weight: $font-weight-medium;
  }

  &__separator {
    color: $color-gray-300;
  }
}
</style>
