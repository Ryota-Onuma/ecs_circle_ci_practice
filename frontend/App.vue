<template>
  <section>
    <p> {{ message }} </p> 
  </section>
</template>
<script>
export default {
  data() {
    return{
      message: "Hello World",
    }
  },
  async created() {
    const res = await this.$axios.get("/api/v1/health_check")
    this.message = res.data.message
  }
}
</script>
<style>
/* reset css */
  @import "./src/stylesheets/reset.css"
</style>
<style scoped lang="scss">
</style>

