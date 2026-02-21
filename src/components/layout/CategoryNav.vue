<template>
  <nav class="category-nav">
    <div class="category-nav__container">
      <div
        v-for="cat in categories"
        :key="cat.id"
        class="category-nav__item"
        @mouseenter="activeCategory = cat.id"
        @mouseleave="activeCategory = null"
      >
        <router-link
          :to="`/courses/${cat.id}`"
          class="category-nav__link"
        >
          {{ cat.name }}
        </router-link>

        <div v-if="activeCategory === cat.id" class="category-nav__dropdown">
          <router-link
            v-for="sub in cat.subcategories"
            :key="sub.id"
            :to="`/courses/${sub.slug}`"
            class="category-nav__sub-link"
          >
            {{ sub.name }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { categories } from '@/data/categories'

const activeCategory = ref(null)
</script>

<style lang="scss" scoped>
.category-nav {
  background: $color-secondary;
  height: $category-nav-height;

  @include respond-to('lg') {
    display: none;
  }

  &__container {
    @include container;
    display: flex;
    height: 100%;
  }

  &__item {
    position: relative;
  }

  &__link {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 $spacing-lg;
    color: $color-white;
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    transition: background $transition-fast;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  &__dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    background: $color-white;
    box-shadow: $shadow-md;
    border-radius: 0 0 $border-radius-md $border-radius-md;
    min-width: 180px;
    padding: $spacing-sm 0;
    z-index: $z-dropdown;
    animation: slideDown $transition-fast;
  }

  &__sub-link {
    display: block;
    padding: $spacing-sm $spacing-lg;
    font-size: $font-size-sm;
    color: $color-gray-700;
    transition: all $transition-fast;

    &:hover {
      background: $color-gray-100;
      color: $color-primary;
    }
  }
}
</style>
