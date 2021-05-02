<template>
  <div id="hello-world">
    <p>Hello World !!!!</p>
    <p>APIとの通信結果：{{ message }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'Pending'
    };
  },
  async created() {
    try {
      const res = await this.$axios.get('/api/v1/health_check');
      this.message = res.data.message;
    } catch (error) {
      console.error(error);
      this.message = 'Failed';
    }
  }
};
</script>
<style lang="scss" scoped>
#hello-world {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
