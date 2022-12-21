<script setup>
import MemoForm from "@/components/MemoForm.vue";
</script>

<script>
import memoData from "@/memoData";

export default {
  data() {
    return {
      memos: [],
    };
  },
  created() {
    this.memos = memoData.loadMemos();
  },
  computed: {
    memo() {
      let id = this.$route.params.id;
      const targetMemo = this.memos.find((memo) => memo.id === id);
      return targetMemo;
    },
    id() {
      return this.$route.params.id;
    },
  },
};
</script>

<template>
  <MemoForm :memo="memo" :id="id" />
</template>
