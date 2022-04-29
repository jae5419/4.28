<template>
  <div>
    <h1>메모</h1>
    <table>
      <tr v-for="(memo, i) in memos" :key="i">
        <td>{{ memo.id }}</td>
        <td>{{ memo.writer }}</td>
        <td @click="$router.push(`/page/${memo.id}`)">{{ memo.title }}</td>
        <td>{{ memo.memo }}</td>
        <!-- 수정 버튼을 눌렀을 때 updateForm 이동 -->
        <td><button @click="$router.push(`/updateform/${memo.id}`)">수정</button></td>
        <!-- 삭제 버튼을 눌렀을 때 삭제할 memo.id 전달 -->
        <td><button @click="delMemo(memo.id)">삭제</button></td>
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
  },
  methods: {
    delMemo: function(id) {
      // axios를 통해 id값을 가진 메모를 삭제
      this.$http.delete(`/api/memo/${id}`)
      .then((res) => {
        // 값이 삭제된 memos 재할당
        this.memos=res.data;
      })
    }
  }
}
</script>