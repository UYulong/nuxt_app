<template>
  <div class="menu">
    <slot />
  </div>
</template>

<script setup>
defineOptions({
  name: 'Menu'
})
</script>

<style>
.menu {
  @apply flex items-center px-4;
}
</style>
