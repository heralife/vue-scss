<template>
  <form class="base-search-bar" @submit.prevent="onSearch">
    <span class="base-search-bar__icon">&#128269;</span>
    <input
      v-model="query"
      class="base-search-bar__input"
      type="text"
      placeholder="Search..."
      @keyup.enter="onSearch"
    />
    <button type="submit" class="base-search-bar__btn">Search</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const query = ref('');
const emit = defineEmits(['search']);

function onSearch() {
  emit('search', query.value.trim());
}
</script>

<style lang="scss" scoped>
.base-search-bar {
  display: flex;
  align-items: center;
  background-color: $color-white;
  border: 1px solid $border-color;
  border-radius: $border-radius-lg;
  overflow: hidden;
  transition: border-color $transition-fast, box-shadow $transition-fast;

  &:focus-within {
    border-color: $color-primary;
    box-shadow: 0 0 0 3px rgba($color-primary, 0.15);
  }

  &__icon {
    padding-left: $spacing-md;
    font-size: $font-size-md;
    color: $color-gray-500;
    line-height: 1;
  }

  &__input {
    flex: 1;
    padding: $spacing-sm $spacing-md;
    font-size: $font-size-base;
    font-family: $font-family-primary;
    color: $color-gray-900;
    border: none;
    outline: none;
    background: transparent;

    &::placeholder {
      color: $color-gray-500;
    }
  }

  &__btn {
    padding: $spacing-sm $spacing-lg;
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    font-family: $font-family-primary;
    color: $color-white;
    background-color: $color-primary;
    border: none;
    cursor: pointer;
    transition: background-color $transition-fast;

    &:hover {
      background-color: $color-primary-dark;
    }
  }
}
</style>
