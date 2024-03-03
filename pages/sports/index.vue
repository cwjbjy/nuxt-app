<template>
  <article>
    <Card :url="'/tiyu.png'" :source="List">最新体育</Card>
  </article>
</template>

<script>
export default {
  async asyncData({ store, app }) {
    const params = {
      type: "tiyu",
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
      title: "最新体育",
      meta: [
        {
          name: "description",
          hid: "description",
          content: "最新体育，获取最新体育",
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
