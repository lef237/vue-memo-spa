<script>
import memoData from "@/memoData";
import { v4 as uuidv4 } from "uuid";

export default {
  props: {
    memo: { type: String, default: "" },
    id: { default: false },
  },
  data() {
    return {
      memos: [],
      content: this.memo.content,
      memoID: this.id,
    };
  },
  mounted() {
    this.memos = memoData.loadMemos();
  },
  methods: {
    save() {
      let memo = {
        title: this.content.split("\n")[0],
        content: this.content,
        id: uuidv4(),
      };
      this.memos.push(memo);
      localStorage.setItem("memos", JSON.stringify(this.memos));
      this.$router.push("/");
    },
    updateMemo() {
      let memo = {
        title: this.content.split("\n")[0],
        content: this.content,
        id: this.memoID,
      };
      const updateIndex = this.memos.findIndex(({ id }) => id === this.id);
      this.memos[updateIndex] = memo;
      localStorage.setItem("memos", JSON.stringify(this.memos));
      this.$router.push("/");
    },
    deleteMemo() {
      const deleteIndex = this.memos.findIndex(({ id }) => id === this.id);
      this.memos.splice(deleteIndex, 1);
      localStorage.setItem("memos", JSON.stringify(this.memos));
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <div><textarea v-model="content"></textarea></div>
  <div v-if="memoID !== false">
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
