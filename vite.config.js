import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
      outDir: 'docs/', //指定输出路径（相对于 项目根目录). 建议使用系统默认
      assetsDir:'semantic-release-test/', // 指定生成静态资源的存放路径（相对于 build.outDir）
    }
})
