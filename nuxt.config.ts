import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  app: {
    head: {
      titleTemplate: '%s - 固定标题',
      title: '在线课堂',
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'zh-cn',
      },
      meta: [
        { name: 'description', content: '在线课堂描述' },
        { name: 'keywords', content: '在线课堂关键词' },
      ],
      script: [
        // { src:"http://xxx.js" }
      ],
      link: [
        // { rel:"stylesheet",href:"http://xxx.css" }
      ],
    },
  },

  devtools: { enabled: true },

  modules: ['@unocss/nuxt', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],

  css: ['@/assets/main.css'],

  unocss: {
    // nuxtLayers: true,
    // uno: true,
    // icons: true,
    // attributify: true,
  },

  imports: {
    dirs: ['apis'],
  },

  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
          : [],
    },

    plugins: [
      AutoImport({
        imports: [
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar',
            ],
          },
        ],
      }),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
    ],
  },

  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
          'naive-ui',
          'vueuc',
          '@css-render/vue3-ssr',
          '@juggle/resize-observer',
        ]
        : ['@juggle/resize-observer'],
  },
});
