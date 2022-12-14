<script>
export default {
  props: {
    memo: { type: String, default: "" },
    id: { default: false },
  },
  data() {
    return {
      memos: [],
      content: this.memo.content,
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
  <div><textarea v-model="content"></textarea></div>
  <div v-if="Number.isInteger(memoIndex)">
    <button @click="updateMemo()">編集</button>
    <button @click="deleteMemo()">削除</button>
  </div>
  <div v-else class="center">
    <button @click="save()">保存</button>
  </div>
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
</style>
