<template>
  <div class="flex justify-center">
    <n-image :src="src" class="border" width="280" height="280" />
  </div>
</template>

<script setup>
import QRCode from 'qrcode';

const props = defineProps(['data']);

const src = ref(null);
QRCode.toDataURL(props.data, {
  width: 280,
  height: 280,
  margin: 2,
}).then((url) => {
  src.value = url;
});
</script>
