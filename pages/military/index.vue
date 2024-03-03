<template>
  <article>
    <Card :url="'/junshi.png'" :source="List">最新军事</Card>
  </article>
</template>

<script>
export default {
  async asyncData({ store, app }) {
    const params = {
      type: "junshi",
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
      title: "最新军事",
      meta: [
        {
          name: "description",
          hid: "description",
          content: "最新军事，获取最新军事",
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
