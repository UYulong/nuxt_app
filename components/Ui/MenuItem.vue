<template>
  <div :class="['menu-item', { 'menu-item-active': active }]">
    <slot />
  </div>
</template>

<script setup>
defineOptions({
  name: 'UiMenuItem',
});

defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<style>
.menu-item {
  transition: all 0.2s;
  @apply: px-2 py-1 mx-1 rounded cursor-pointer hover-bg-blue-50
    hover-text-blue-700;
}

.menu-item-active {
  @apply: bg-blue-100 text-blue-600;
}
</style>
