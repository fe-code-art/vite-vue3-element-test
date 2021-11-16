import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import ElementPlus from 'unplugin-element-plus/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  Components({
    dirs: [],//自动引入
    exclude: ['src/views', 'src/components'],//手动引入
    // directoryAsNamespace: true,
    resolvers: [ElementPlusResolver()],
  }),
  ]
})
