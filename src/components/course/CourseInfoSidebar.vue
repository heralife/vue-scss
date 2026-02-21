<template>
  <div class="course-sidebar">
    <div class="course-sidebar__price">
      <div v-if="course.originalPrice !== course.salePrice" class="course-sidebar__discount">
        <span class="course-sidebar__discount-rate">{{ course.discountRate }}%</span>
        <span class="course-sidebar__original">{{ formatPrice(course.originalPrice) }}원</span>
      </div>
      <div class="course-sidebar__sale">{{ formatPrice(course.salePrice) }}원</div>
    </div>

    <div class="course-sidebar__meta">
      <div class="course-sidebar__meta-item">
        <span>수강기간</span>
        <strong>{{ course.duration }}일</strong>
      </div>
      <div class="course-sidebar__meta-item">
        <span>강의수</span>
        <strong>{{ course.lectureCount }}강</strong>
      </div>
      <div class="course-sidebar__meta-item">
        <span>난이도</span>
        <strong>{{ course.level }}</strong>
      </div>
    </div>

    <button class="course-sidebar__enroll-btn" @click="handleEnroll">
      수강신청
    </button>
    <button
      class="course-sidebar__cart-btn"
      @click="handleCart"
      :disabled="isInCart(course.id)"
    >
      {{ isInCart(course.id) ? '장바구니에 담김' : '장바구니 담기' }}
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'
import { formatPrice } from '@/utils/formatters'

const props = defineProps({
  course: { type: Object, required: true }
})

const router = useRouter()
const { addItem, isInCart } = useCartStore()

const handleEnroll = () => {
  addItem(props.course)
  router.push('/enrollment')
}

const handleCart = () => {
  addItem(props.course)
}
</script>

<style lang="scss" scoped>
.course-sidebar {
  position: sticky;
  top: calc($header-height + $category-nav-height + $spacing-md);
  background: $color-white;
  border: 1px solid $border-color;
  border-radius: $border-radius-md;
  padding: $spacing-lg;

  &__price {
    margin-bottom: $spacing-md;
    padding-bottom: $spacing-md;
    border-bottom: 1px solid $border-color;
  }

  &__discount {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    margin-bottom: $spacing-xs;
  }

  &__discount-rate {
    color: $color-primary;
    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
  }

  &__original {
    color: $color-gray-300;
    text-decoration: line-through;
    font-size: $font-size-sm;
  }

  &__sale {
    font-size: $font-size-2xl;
    font-weight: $font-weight-bold;
  }

  &__meta {
    margin-bottom: $spacing-lg;
  }

  &__meta-item {
    @include flex-between;
    padding: $spacing-sm 0;
    font-size: $font-size-sm;

    span {
      color: $color-gray-500;
    }

    strong {
      color: $color-black;
    }
  }

  &__enroll-btn {
    @include button-base;
    width: 100%;
    background: $color-primary;
    color: $color-white;
    padding: 14px;
    font-size: $font-size-md;
    border-radius: $border-radius-md;
    margin-bottom: $spacing-sm;

    &:hover {
      background: $color-primary-dark;
    }
  }

  &__cart-btn {
    @include button-base;
    width: 100%;
    background: $color-white;
    color: $color-primary;
    border: 1px solid $color-primary;
    padding: 14px;
    border-radius: $border-radius-md;

    &:hover:not(:disabled) {
      background: rgba($color-primary, 0.05);
    }

    &:disabled {
      border-color: $color-gray-300;
      color: $color-gray-500;
    }
  }
}
</style>
