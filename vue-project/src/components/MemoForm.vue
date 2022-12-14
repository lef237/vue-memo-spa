<script>
export default {
  name: "MemoForm",
  props: {
    memo: { type: String, default: "" },
    id: { default: false },
  },
  // ["memo"],
  data() {
    return {
      content: this.memo.content,
      // title: this.content.split("\n")[0],
      memos: [],
      memoIndex: this.id,
    };
  },
  mounted() {
    this.memos = JSON.parse(localStorage.getItem("memos") || "[]");
  },
  methods: {
    save() {
      let memo = {
        title: this.content.split("\n")[0],
        content: this.content,
      };
      this.memos.push(memo);
      localStorage.setItem("memos", JSON.stringify(this.memos));
      this.$router.push("/");
    },
    updateMemo() {
      let memo = {
        title: this.content.split("\n")[0],
        content: this.content,
      };
      this.memos[this.memoIndex] = memo;
      localStorage.setItem("memos", JSON.stringify(this.memos));
      this.$router.push("/");
    },
    deleteMemo() {
      this.memos.splice(this.memoIndex, 1);
      localStorage.setItem("memos", JSON.stringify(this.memos));
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <!-- <div><input type="text"></div> -->
  <div><textarea v-model="content"></textarea></div>
  <div v-if="Number.isInteger(memoIndex)">
    編集と削除
    <button @click="updateMemo()">編集</button>
    <!-- ここはdelete()だとエラーが出るので注意 -->
    <button @click="deleteMemo()">削除</button>
  </div>
  <div v-else class="center">
    <button @click="save()">保存</button>
  </div>
  <div>
    <span>{{ content }}</span>
    <!-- <span>{{ title }}</span> -->
  </div>
  <div v-if="Number.isInteger(memoIndex)">{{ memoIndex }}</div>
  <div v-else>新規メモ</div>
</template>

<style scoped>
div {
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
}
textarea {
  width: 50%;
  height: 10em;
}
button {
  width: 5em;
  margin: 3px;
}
/* .center {
  text-align: center;
} */
</style>
