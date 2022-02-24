<!--
 * @Descripttion: 
 * @version: 
 * @Author: MiKin
 * @Date: 2022-01-19 21:48:11
 * @LastEditors: MiKin
 * @LastEditTime: 2022-02-24 17:10:51
 * @FilePath: \cartoon-avatar\src\App.vue
-->
<script setup>
import { onMounted, ref } from "@vue/runtime-core"
import Image from "./components/Image.vue"
import { disableKey } from "./hooks/disableKey"

let count = ref(140);
let images = ref([]);
let newImages = ref([]);

fetch(`${location.pathname}json/avatar.json`).then(res => {
  return res.json()
}).then(data => {
  images.value = data;
  getImages();
})

// real avatar
const realAvatar = (url) => {
  return `${location.pathname}avatar/${url}`
}

// Get the initial picture
const getImages = () => {
  newImages.value = images.value.slice(0, count.value);
}

// load more
const loadMore = () => {
  count.value += 20;
  getImages();
}


const infiniteScroll = {
  init() {
    this.bind()
  },
  bind() {
    window.addEventListener('scroll', () => {
      if (this.isBottom()) {
        this.loadMore()
      }
    })
  },
  isBottom() {
    return (
      document.documentElement.scrollTop + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    )
  },
  loadMore() {
    loadMore()
  }
}
onMounted(() => {
  
console.log(
  
);
  infiniteScroll.init();
  disableKey();
})

</script>

<template>
  <Image v-for="i in newImages" :key="i" :src="`${realAvatar(i)}`" />
</template>

<style>
#app {
  margin-top: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
</style>
