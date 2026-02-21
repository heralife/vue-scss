<template>
  <div class="loading-spinner">
    <div class="loading-spinner__ring" />
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.loading-spinner {
  @include flex-center;
  padding: $spacing-lg;

  &__ring {
    width: 40px;
    height: 40px;
    border: 4px solid $color-gray-200;
    border-top-color: $color-primary;
    border-radius: $border-radius-full;
    animation: spinner-rotate 0.8s linear infinite;
  }
}

@keyframes spinner-rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
