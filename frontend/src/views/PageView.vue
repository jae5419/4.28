<template>
  <div>
    <h1>{{ memo.title }}</h1>
    <p>{{ memo.memo }}</p>
    <p>{{ memo.writer }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return ({
      memo: {}
    })
  },
  created() {
    this.$http.get(`/api/memo/${this.$route.params.id}`).then((res) => {this.memo=res.data;});
  }
}
</script>