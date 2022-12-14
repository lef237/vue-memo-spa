<script>
export default {
  data() {
    return {
      memos: [],
    };
  },
  mounted() {
    this.memos = JSON.parse(localStorage.getItem("memos") || "[]");
  },
  computed: {
    hasMemos() {
      return this.memos.length;
    },
  },
};
</script>

<template>
  <div class="list">
    <h1>This is memoList page</h1>
  </div>
  <div class="list">
    <ul v-if="hasMemos">
      <li v-for="memo in memos" :key="memo.title">
        {{ memo.title }}
      </li>
    </ul>
    <p v-else>メモはありません</p>
    <!-- メモの件数を表示 -->
    <p>今のメモの登録数は{{ hasMemos }}つです</p>
  </div>
</template>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

li a {
  color: #999;
  text-decoration: none;
  width: 100%;
  display: block;
}

p {
  color: rgb(33, 165, 50);
}
</style>
