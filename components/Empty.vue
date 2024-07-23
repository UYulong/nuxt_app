<template>
  <n-empty :description="desc" size="large" class="py-10" />
</template>

<script setup>
defineOptions({
  name: 'Empty'
})

defineProps({
  desc: {
    type: String,
    default: "暂无数据"
  }
})
</script>
