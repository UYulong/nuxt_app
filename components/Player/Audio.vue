<template>
  <div id="aplayer" />
</template>
<script setup>
let ap = ref(null);

const props = defineProps({
  title: String,
  cover: String,
  url: String,
});

onMounted(() => {
  ap.value = new APlayer({
    container: document.getElementById('aplayer'),
    audio: [
      {
        name: props.title,
        artist: 'Nuxt App',
        url: props.url,
        cover: props.cover,
      },
    ],
  });
});

onBeforeUnmount(() => ap.value.destroy());
</script>
