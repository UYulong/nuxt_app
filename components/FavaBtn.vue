<template>
  <n-button
    strong
    secondary
    :type="is_fava ? 'primary' : 'tertiary'"
    size="tiny"
    :loading="loading"
    @click="handleFava"
  >
    收藏
  </n-button>
</template>
<script setup>
import { createDiscreteApi } from 'naive-ui';

const props = defineProps({
  isfava: {
    type: Boolean,
    default: false,
  },
  goods_id: {
    type: Number,
    default: 0,
  },
  type: {
    type: String,
    default: 'course',
  },
});

const is_fava = ref(props.isfava);

const loading = ref(false);
const handleFava = () => {
  // 登录之后才能收藏/取消收藏
  useHasAuth(async () => {
    loading.value = true;

    let data = {
      goods_id: props.goods_id,
      type: props.type,
    };

    let { error } = is_fava.value
      ? await useUncollectApi(data)
      : await useCollectApi(data);

    loading.value = false;

    if (error.value) return;

    const { message } = createDiscreteApi(['message']);

    message.success((is_fava.value ? '取消收藏' : '收藏') + '成功');

    is_fava.value = !is_fava.value;
  });
};
</script>
