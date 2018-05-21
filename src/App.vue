<template>
  <div id="app">
    <t-header></t-header>
    <router-view/>
    <prompt/>
  </div>
</template>

<script>
import h from "@/components/t-header.vue"
import p from "@/components/prompt.vue"
import "@/assets/css/reset.css"


export default {
  name: 'App',
  components: {
    "t-header":h,
    "prompt":p
  }
}
</script>

<style>

</style>
