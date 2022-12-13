<script>
import { mapState } from "pinia";
import { useMemosStore } from "@/stores/memos";
export default {
  computed: {
    ...mapState(useMemosStore, {
      memosArray: "memos",
      memosLength: (store) => store.memos.length,
    }),
  },
};


// ここから追記エリア



// const memosStore = useMemosStore();
// let memo = {
//   title: "メモのタイトルです",
//   content: "メモの内容です",
// };





</script>

<template>
  <!-- <div><input type="text"></div> -->
  <div><textarea></textarea></div>
  <div class="center">
    <button @click="memosStore.saveMemos(memo)">保存</button>
  </div>
  <div>
    <span>{{ memosArray }}</span>
    <span>{{ memosLength }}</span>
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
/* .center {
  text-align: center;
} */
</style>
