<template>
  <section id="index">
    <h1>トップページ</h1>
    <hello-world />
    <router-link to="/about">Aboutへ</router-link>
  </section>
</template>
<script>
import HelloWorld from "../components/HelloWorld"
export default {
  components:{
    "hello-world": HelloWorld
  }
}
</script>
<style lang="scss" scoped>
  #index{
    width:100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>