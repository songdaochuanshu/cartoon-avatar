/*
 * @Descripttion: 
 * @version: 
 * @Author: MiKin
 * @Date: 2022-01-19 21:48:11
 * @LastEditors: MiKin
 * @LastEditTime: 2022-01-20 16:33:40
 * @FilePath: \scary ux\vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/cartoon-avatar/'
})
