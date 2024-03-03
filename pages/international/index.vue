<template>
  <article>
    <Card :url="'/guoji.png'" :source="List">最新国际</Card>
  </article>
</template>

<script>
export default {
  async asyncData({ store, app }) {
    const params = {
      type: "guoji",
      key: store.state.key,
    };
    const { data } = await app.$axios("/toutiao/index", { params });
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
      title: "最新国际",
      meta: [
        {
          name: "description",
          hid: "description",
          content: "最新国际，获取国际新闻",
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
