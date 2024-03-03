<template>
  <article>
    <Card :url="'/toutiao.png'" :source="List">今日头条</Card>
  </article>
</template>

<script>
// import list from "../assets/mock/homePage";
export default {
  async asyncData({ store, app }) {
    const params = {
      type: "top",
      key: store.state.key,
    };
    const { data } = await app.$axios.get("/toutiao/index", { params });
    return {
      List: data.result?.data || [],
    };
  },
  data() {
    return {
      List: [],
    };
  },
  head() {
    return {
      title: "今日头条",
      meta: [
        {
          name: "description",
          hid: "description",
          content: "今日头条，时时获取新闻",
        },
      ],
    };
  },
};
</script>

<style>
article {
  max-width: 1200px;
  margin: 15px auto;
  background: #fff;
}
</style>
