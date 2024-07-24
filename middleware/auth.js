
import { createDiscreteApi } from "naive-ui";
import { useUserStore } from '@/stores/userStore'

export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("token")
  // const user = useUser()
  const userStore = useUserStore()
  const { user } = storeToRefs(userStore)

  // 未登录
  if (!token.value) {
    if (import.meta.client) {
      const { message } = createDiscreteApi(["message"])
      message.error("请先登录")
    }

    return navigateTo("/login?from=" + to.fullPath)
  }

  // 未绑定手机号
  const phone = user.value?.phone
  if (!phone && to.name != 'bindphone') {
    if (import.meta.client) {
      const { message } = createDiscreteApi(["message"])
      message.error("请先绑定手机号")
    }
    return navigateTo("/bindphone?from=" + to.fullPath)
  }
})
