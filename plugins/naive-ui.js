import { setup } from "@css-render/vue3-ssr";
import { defineNuxtPlugin } from "#app";

// export default defineNuxtPlugin((nuxtApp) => {
//   if (import.meta.server) {
//     const { collect } = setup(nuxtApp.vueApp);
//     const originalRenderMeta = nuxtApp.ssrContext?.renderMeta;
//     nuxtApp.ssrContext = nuxtApp.ssrContext || {};
//     nuxtApp.ssrContext.renderMeta = () => {
//       if (!originalRenderMeta) {
//         return {
//           headTags: collect(),
//         };
//       }
//       const originalMeta = originalRenderMeta();
//       if ("then" in originalMeta) {
//         return originalMeta.then((resolvedOriginalMeta) => {
//           return {
//             ...resolvedOriginalMeta,
//             headTags: resolvedOriginalMeta["headTags"] + collect(),
//           };
//         });
//       } else {
//         return {
//           ...originalMeta,
//           headTags: originalMeta["headTags"] + collect(),
//         };
//       }
//     };
//   }
// });

export default defineNuxtPlugin((nuxtApp) => {
  const { collect } = setup(nuxtApp.vueApp)
  useServerHead({
    style: () => {
      const stylesString = collect()
      const stylesArray = stylesString.split(/<\/style>/g).filter(style => style)
      return stylesArray.map((styleString) => {
        const match = styleString.match(/<style cssr-id="([^"]*)">([\s\S]*)/)
        if (match) {
          const id = match[1]
          return { 'cssr-id': id, children: match[2] }
        }
        return {}
      })
    }
  })
})

