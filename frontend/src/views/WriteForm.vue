<template>
  <div>
    <h1>글을 작성하는 공간입니다</h1>
    <input type="text" v-model="title"><br>
    <textarea cols="30" rows="10" v-model="memo"></textarea><br>
    <button @click="sendMemo">전송</button>
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
    sendMemo: function() {
      this.$http.post('/api/memo', {
        data: {
          title: this.title,
          memo: this.memo
        }
      });
      this.$router.push('/');
    }
  }
}
</script>