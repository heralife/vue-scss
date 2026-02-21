import { reactive, computed, watch } from 'vue'

const state = reactive({
  items: JSON.parse(localStorage.getItem('hackers_cart') || '[]')
})

watch(() => state.items, (items) => {
  localStorage.setItem('hackers_cart', JSON.stringify(items))
}, { deep: true })

export function useCartStore() {
  const addItem = (course) => {
    if (!state.items.find(item => item.id === course.id)) {
      state.items.push({
        id: course.id,
        title: course.title,
        instructorId: course.instructorId,
        originalPrice: course.originalPrice,
        salePrice: course.salePrice
      })
    }
  }

  const removeItem = (courseId) => {
    const idx = state.items.findIndex(item => item.id === courseId)
    if (idx !== -1) state.items.splice(idx, 1)
  }

  const clearCart = () => {
    state.items.splice(0, state.items.length)
  }

  const itemCount = computed(() => state.items.length)

  const totalPrice = computed(() =>
    state.items.reduce((sum, item) => sum + item.salePrice, 0)
  )

  const isInCart = (courseId) =>
    state.items.some(item => item.id === courseId)

  return { state, addItem, removeItem, clearCart, itemCount, totalPrice, isInCart }
}
