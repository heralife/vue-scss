<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="base-modal" @click.self="close">
        <div class="base-modal__backdrop" />
        <div class="base-modal__content">
          <button class="base-modal__close" @click="close">&times;</button>
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

function close() {
  emit('update:modelValue', false);
}
</script>

<style lang="scss" scoped>
.base-modal {
  position: fixed;
  inset: 0;
  z-index: $z-modal;
  @include flex-center;

  &__backdrop {
    position: absolute;
    inset: 0;
    background-color: rgba($color-black, 0.5);
    z-index: $z-overlay;
  }

  &__content {
    position: relative;
    z-index: $z-modal;
    background-color: $color-white;
    border-radius: $border-radius-lg;
    padding: $spacing-xl;
    box-shadow: $shadow-lg;
    max-width: 560px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
  }

  &__close {
    position: absolute;
    top: $spacing-sm;
    right: $spacing-sm;
    background: none;
    border: none;
    font-size: $font-size-xl;
    color: $color-gray-500;
    cursor: pointer;
    padding: $spacing-xs;
    line-height: 1;
    transition: color $transition-fast;

    &:hover {
      color: $color-gray-900;
    }
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity $transition-base;

  .base-modal__content {
    transition: transform $transition-base, opacity $transition-base;
  }
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;

  .base-modal__content {
    transform: scale(0.95) translateY(-10px);
    opacity: 0;
  }
}
</style>
