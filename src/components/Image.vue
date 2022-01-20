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
    :src="`https://cdn.cartoon-avatar.songdaochuanshu.com/example-${src}.jpg`"
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
