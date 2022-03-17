import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import styleImport, { VantResolve } from 'vite-plugin-style-import';//配置vant插件

const path = require('path')

const srcPath = path.resolve(__dirname, 'src')
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': {
        target:'https://netease-cloud-music-api-lime.vercel.app/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    cors:true
  },
  plugins: [
    vue(),
    styleImport({   //vant插件配置
      resolves: [VantResolve()],
    }),
  ],
  resolve:{
    alias:[
      {find:'@',replacement:srcPath}
    ]
  }
})
