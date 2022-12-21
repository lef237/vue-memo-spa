<script>
import memoData from "@/memoData";

export default {
  data() {
    return {
      memos: [],
    };
  },
  mounted() {
    this.memos = memoData.loadMemos();
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
    <h1>メモ一覧ページです</h1>
  </div>
  <div class="list">
    <ul v-if="hasMemos">
      <li v-for="(memo, index) in memos" :key="memo.title">
        <router-link :to="{ name: 'edit', params: { id: index } }">{{
          memo.title
        }}</router-link>
      </li>
    </ul>
    <p v-else>メモはありません</p>
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
  color: rgb(79, 66, 250);
  text-decoration: underline;
  width: 100%;
  display: block;
}

p {
  color: rgb(33, 165, 50);
}
</style>
