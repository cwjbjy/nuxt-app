<template>
  <article>
    <Card :url="'/yule.png'" :source="List">最新娱乐</Card>
  </article>
</template>

<script>
export default {
  async asyncData({ store, app }) {
    const params = {
      type: "yule",
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
      title: "最新娱乐",
      meta: [
        {
          name: "description",
          hid: "description",
          content: "最新娱乐，获取国内娱乐",
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
