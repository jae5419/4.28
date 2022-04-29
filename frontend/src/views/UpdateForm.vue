<template>
  <div>
    <h1>글을 수정하는 공간입니다</h1>
    <input type="text" v-model="title"><br>
    <textarea cols="30" rows="10" v-model="memo"></textarea><br>
    <button @click="updateMemo">수정</button>
  </div>
</template>

<script>
export default {
  data() {
    return ({
      title: "",
      memo: ""
    })
  },
  methods: {
    updateMemo: function() {
      this.$http.put(`/api/memo/${this.$route.params.id}`, {
        data: {
          title: this.title,
          memo: this.memo
        }
      });
      this.$router.push('/');
    }
  },
  created() {
    this.$http.get(`/api/memo/${this.$route.params.id}`).then((res) => {this.title=res.data.title; this.memo=res.data.memo;});
  }
}
</script>