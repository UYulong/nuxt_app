<template>
  <n-grid x-gap="12" :cols="4" class="mb-6">
    <n-gi v-for="(item, index) in data" :key="index">
      <n-card class="cursor-pointer" @click="$commonOpen(item)">
        <template #cover>
          <img :src="item.src" class="w-[100%] h-[90px]" />
        </template>
        <div class="text-center pt-4">
          {{ item.name }}
        </div>
      </n-card>
    </n-gi>
  </n-grid>
</template>

<script setup>
defineProps({
  data: Array,
});
</script>
