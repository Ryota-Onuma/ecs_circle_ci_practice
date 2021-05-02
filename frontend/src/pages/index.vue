<template>
  <section id="index"> 
    <router-link to="/about">Aboutへ</router-link>
    <div class="tweet" v-for="tweet in tweets" :key="tweet.id">
      <div class="title">{{ tweet.title }}</div>
      <div>{{ tweet.content }}</div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      tweets:null
    }
  },
  async created(){
    const tweets = await this.$axios.get("/api/v1/tweets")
    console.log(tweets)
    this.tweets = tweets.data
  }
};
</script>
<style lang="scss" scoped>
#index {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  box-sizing: border-box;
  .tweet{
    margin: 30px;
     border: 1px solid skyblue;
     padding: 10px 20px;
    .title{
      font-size: 1.5rem;     
    }
  }
}
</style>
