<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import {provide, ref} from 'vue'
import {router} from './router'
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth
    const asideVisible = ref(width <=500 ? false : true)
    console.log(asideVisible)
    provide('xxx', asideVisible)

    router.afterEach(() => {
      if(width <=500){
        asideVisible.value = false
      }
    });
  },
};
</script>
