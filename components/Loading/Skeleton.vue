<template>
  <n-card v-for="i in 3" :key="i" class="mb-5">
    <n-skeleton text style="width: 30%" />
    <n-skeleton text :repeat="3" />
    <n-skeleton text style="width: 60%" />
  </n-card>
</template>
