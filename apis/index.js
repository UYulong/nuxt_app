// 获取 首页信息
export function useIndexDataApi() {
  return useHttpGet("IndexData", "/index", {
    lazy: true
  })
}

// 获取 拼团信息
export function useGroupDataApi(query) {
  let q = useQueryToString(query)
  return useHttpGet("groupData", `/group/list${q}`)
}
