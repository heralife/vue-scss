<template>
  <section class="category-section">
    <div class="category-section__container">
      <h2 class="category-section__title">교육 카테고리</h2>
      <div class="category-section__grid">
        <router-link
          v-for="cat in categories"
          :key="cat.id"
          :to="`/courses/${cat.id}`"
          class="category-section__card"
          :style="{ '--cat-color': cat.color }"
        >
          <div class="category-section__icon">
            <span v-if="cat.icon === 'globe'">🌐</span>
            <span v-else-if="cat.icon === 'certificate'">📜</span>
            <span v-else>💼</span>
          </div>
          <h3>{{ cat.name }}</h3>
          <p>{{ cat.description }}</p>
          <div class="category-section__tags">
            <span v-for="sub in cat.subcategories" :key="sub.id">{{ sub.name }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { categories } from '@/data/categories'
</script>

<style lang="scss" scoped>
.category-section {
  padding: $spacing-3xl 0;

  &__container {
    @include container;
  }

  &__title {
    font-size: $font-size-2xl;
    text-align: center;
    margin-bottom: $spacing-xl;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $spacing-lg;

    @include respond-to('md') {
      grid-template-columns: 1fr;
    }
  }

  &__card {
    @include card-base;
    padding: $spacing-xl;
    text-align: center;
    border-top: 4px solid var(--cat-color);

    h3 {
      font-size: $font-size-xl;
      margin: $spacing-md 0 $spacing-sm;
    }

    p {
      font-size: $font-size-sm;
      color: $color-gray-500;
      margin-bottom: $spacing-md;
    }
  }

  &__icon {
    font-size: 40px;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: $spacing-xs;

    span {
      padding: 4px 12px;
      background: $color-gray-100;
      border-radius: $border-radius-full;
      font-size: $font-size-xs;
      color: $color-gray-700;
    }
  }
}
</style>
