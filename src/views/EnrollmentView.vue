<template>
  <div class="enrollment">
    <div class="enrollment__container">
      <h1 class="enrollment__title">수강신청</h1>

      <template v-if="!orderComplete">
        <div class="enrollment__content">
          <div class="enrollment__main">
            <EnrollmentSummary
              :items="cartItems"
              @remove="removeFromCart"
            />

            <CouponInput
              :discount="couponDiscount"
              @apply="applyCoupon"
            />

            <PaymentMethodSelector
              v-model="paymentMethod"
            />

            <EnrollmentForm
              :agreements="agreements"
              @update:agreements="agreements = $event"
            />
          </div>

          <div class="enrollment__sidebar">
            <div class="enrollment__price-box">
              <h3>결제 정보</h3>
              <div class="enrollment__price-row">
                <span>총 강의금액</span>
                <span>{{ formatPrice(totalOriginal) }}원</span>
              </div>
              <div class="enrollment__price-row enrollment__price-row--discount">
                <span>할인금액</span>
                <span>-{{ formatPrice(totalDiscount) }}원</span>
              </div>
              <div class="enrollment__price-row" v-if="couponDiscount > 0">
                <span>쿠폰할인</span>
                <span>-{{ formatPrice(couponDiscount) }}원</span>
              </div>
              <div class="enrollment__price-total">
                <span>최종 결제금액</span>
                <span class="enrollment__final-price">{{ formatPrice(finalPrice) }}원</span>
              </div>
              <button
                class="enrollment__submit-btn"
                :disabled="!canSubmit"
                @click="submitOrder"
              >
                {{ formatPrice(finalPrice) }}원 결제하기
              </button>
            </div>
          </div>
        </div>
      </template>

      <OrderComplete
        v-else
        :orderNumber="orderNumber"
        :courses="cartItems"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import { formatPrice } from '@/utils/formatters'
import EnrollmentSummary from '@/components/enrollment/EnrollmentSummary.vue'
import EnrollmentForm from '@/components/enrollment/EnrollmentForm.vue'
import PaymentMethodSelector from '@/components/enrollment/PaymentMethodSelector.vue'
import CouponInput from '@/components/enrollment/CouponInput.vue'
import OrderComplete from '@/components/enrollment/OrderComplete.vue'

const { state: cart, removeItem } = useCartStore()

const cartItems = computed(() => cart.items)
const paymentMethod = ref('credit-card')
const couponDiscount = ref(0)
const orderComplete = ref(false)
const orderNumber = ref('')
const agreements = ref({
  all: false,
  terms: false,
  privacy: false,
  refund: false
})

const totalOriginal = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.originalPrice, 0)
)

const totalDiscount = computed(() =>
  cartItems.value.reduce((sum, item) => sum + (item.originalPrice - item.salePrice), 0)
)

const finalPrice = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.salePrice, 0) - couponDiscount.value
)

const canSubmit = computed(() =>
  cartItems.value.length > 0 &&
  agreements.value.terms &&
  agreements.value.privacy &&
  agreements.value.refund
)

const removeFromCart = (courseId) => {
  removeItem(courseId)
}

const applyCoupon = (code) => {
  if (code === 'HACKERS2026') {
    couponDiscount.value = 10000
  }
}

const submitOrder = () => {
  orderNumber.value = 'HK' + Date.now().toString().slice(-8)
  orderComplete.value = true
}
</script>

<style lang="scss" scoped>
.enrollment {
  padding: $spacing-xl 0 $spacing-3xl;

  &__container {
    @include container;
  }

  &__title {
    font-size: $font-size-2xl;
    margin-bottom: $spacing-xl;
  }

  &__content {
    display: flex;
    gap: $spacing-xl;

    @include respond-to('lg') {
      flex-direction: column;
    }
  }

  &__main {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: $spacing-xl;
  }

  &__sidebar {
    width: 360px;
    flex-shrink: 0;

    @include respond-to('lg') {
      width: 100%;
    }
  }

  &__price-box {
    background: $color-white;
    border: 1px solid $border-color;
    border-radius: $border-radius-md;
    padding: $spacing-lg;
    position: sticky;
    top: calc($header-height + $spacing-md);

    h3 {
      font-size: $font-size-lg;
      margin-bottom: $spacing-md;
      padding-bottom: $spacing-sm;
      border-bottom: 1px solid $border-color;
    }
  }

  &__price-row {
    @include flex-between;
    padding: $spacing-sm 0;
    font-size: $font-size-sm;
    color: $color-gray-700;

    &--discount span:last-child {
      color: $color-primary;
    }
  }

  &__price-total {
    @include flex-between;
    padding-top: $spacing-md;
    margin-top: $spacing-sm;
    border-top: 2px solid $color-black;
    font-weight: $font-weight-bold;
  }

  &__final-price {
    font-size: $font-size-xl;
    color: $color-primary;
  }

  &__submit-btn {
    @include button-base;
    width: 100%;
    margin-top: $spacing-md;
    padding: 16px;
    font-size: $font-size-md;
    background: $color-primary;
    color: $color-white;
    border-radius: $border-radius-md;

    &:hover:not(:disabled) {
      background: $color-primary-dark;
    }
  }
}
</style>
