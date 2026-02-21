<template>
  <div class="course-filter">
    <div class="course-filter__section">
      <h4>카테고리</h4>
      <label v-for="cat in allCategories" :key="cat.id" class="course-filter__option">
        <input
          type="radio"
          :value="cat.id"
          :checked="filters.category === cat.id"
          @change="updateFilter('category', cat.id)"
          name="category"
        />
        <span>{{ cat.name }}</span>
      </label>
      <label class="course-filter__option">
        <input
          type="radio"
          value=""
          :checked="!filters.category"
          @change="updateFilter('category', '')"
          name="category"
        />
        <span>전체</span>
      </label>
    </div>

    <div class="course-filter__section">
      <h4>난이도</h4>
      <label v-for="level in levels" :key="level" class="course-filter__option">
        <input
          type="radio"
          :value="level"
          :checked="filters.level === level"
          @change="updateFilter('level', level)"
          name="level"
        />
        <span>{{ level }}</span>
      </label>
      <label class="course-filter__option">
        <input
          type="radio"
          value=""
          :checked="!filters.level"
          @change="updateFilter('level', '')"
          name="level"
        />
        <span>전체</span>
      </label>
    </div>

    <div class="course-filter__section">
      <h4>가격대</h4>
      <label v-for="range in priceRanges" :key="range.label" class="course-filter__option">
        <input
          type="radio"
          :value="range.label"
          :checked="selectedPriceLabel === range.label"
          @change="updateFilter('priceRange', range.value)"
          name="price"
        />
        <span>{{ range.label }}</span>
      </label>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { categories } from '@/data/categories'

const props = defineProps({
  filters: { type: Object, required: true }
})

const emit = defineEmits(['update:filters'])

const allCategories = computed(() => {
  const cats = []
  categories.forEach(cat => {
    cats.push({ id: cat.id, name: cat.name })
    cat.subcategories.forEach(sub => {
      cats.push({ id: sub.id, name: `  ${sub.name}` })
    })
  })
  return cats
})

const levels = ['입문', '초급', '중급', '고급']

const priceRanges = [
  { label: '전체', value: null },
  { label: '10만원 이하', value: [0, 100000] },
  { label: '10~20만원', value: [100000, 200000] },
  { label: '20만원 이상', value: [200000, null] }
]

const selectedPriceLabel = computed(() => {
  if (!props.filters.priceRange) return '전체'
  const match = priceRanges.find(r =>
    r.value && r.value[0] === props.filters.priceRange[0] && r.value[1] === props.filters.priceRange[1]
  )
  return match?.label || '전체'
})

const updateFilter = (key, value) => {
  emit('update:filters', { ...props.filters, [key]: value })
}
</script>

<style lang="scss" scoped>
.course-filter {
  &__section {
    margin-bottom: $spacing-lg;
    padding-bottom: $spacing-lg;
    border-bottom: 1px solid $border-color;

    &:last-child {
      border-bottom: none;
    }

    h4 {
      font-size: $font-size-sm;
      font-weight: $font-weight-bold;
      margin-bottom: $spacing-sm;
      color: $color-black;
    }
  }

  &__option {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    padding: 6px 0;
    cursor: pointer;
    font-size: $font-size-sm;
    color: $color-gray-700;

    input {
      accent-color: $color-primary;
    }

    &:hover span {
      color: $color-primary;
    }
  }
}
</style>
