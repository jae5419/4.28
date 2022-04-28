<template>
  <div>
    <h1>메모</h1>
    <table>
      <tr v-for="(memo, i) in memos" :key="i" @click="$router.push(`/page/${memo.id}`)">
        <td>{{ memo.id }}</td>
        <td>{{ memo.writer }}</td>
        <td>{{ memo.title }}</td>
        <td>{{ memo.memo }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return ({
      memos: []
    })
  },
  created() {
    this.$http.get('/api/memo').then((res) => {this.memos=res.data});
  }
}
</script>