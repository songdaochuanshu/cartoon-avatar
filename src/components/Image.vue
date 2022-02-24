<!--
 * @Descripttion: 
 * @version: 
 * @Author: MiKin
 * @Date: 2022-02-24 13:41:16
 * @LastEditors: MiKin
 * @LastEditTime: 2022-02-24 16:02:19
 * @FilePath: \cartoon-avatar\src\components\Image.vue
-->
<script setup>
import { showBigImage } from '../hooks/showBigImage'

defineProps({
  src: {
    type: String,
    default: 'https://http.cat/404.jpg'
  },
  alt: {
    type: String,
    default: 'Image'
  }
})

const errorImage = (el) => {
  el.target.src = 'https://http.cat/404.jpg';
}

</script>

<template>
  <img
    width="155"
    height="155"
    :src="src"
    style=" animation: renderImage 1s;transition: all 1s;"
    @error="errorImage"
    @click="showBigImage"
    :alt="alt"
  />
</template>

<style scoped>
@keyframes renderImage {
  0% {
    filter: blur(20px);
  }
  100% {
    filter: blur(0px);
  }
}
img {
  object-fit: cover;
  user-select: none;
}
</style>
