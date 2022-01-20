<!--
 * @Descripttion: 
 * @version: 
 * @Author: MiKin
 * @Date: 2022-01-19 21:48:11
 * @LastEditors: MiKin
 * @LastEditTime: 2022-01-20 16:19:23
 * @FilePath: \scary ux\src\App.vue
-->
<script setup>
import { onMounted, ref } from "@vue/runtime-core"
import Image from "./components/Image.vue"

let count = ref(140);

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
    console.log('加载更多')
    count.value += 20
  }
}
onMounted(() => {
  infiniteScroll.init();
  window.addEventListener('keydown', (e) => {
    if (e.keyCode === 38) {
      window.scrollBy(0, -100)
    } else if (e.keyCode === 40) {
      window.scrollBy(0, 100)
    }
  })

  document.oncontextmenu = function () {
    return false;
  }
  document.onkeydown = function () {
    if (window.event && window.event.keyCode == 123) {
      return false;
    }
  }
  document.onkeydown = function () {
    if (window.event && window.event.ctrlKey) {
      if (window.event.keyCode == 67) {
        return false;
      }
    }
  }

})

</script>

<template>
  <div></div>
  <Image v-for="i in count" :key="i" :src="i" />
</template>

<style>
#app {
  margin-top: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
