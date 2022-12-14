<script setup>
import MemoForm from "@/components/MemoForm.vue";
</script>

<script>
export default {
  data() {
    return {
      memos: [],
    };
  },
  created() {
    this.memos = JSON.parse(localStorage.getItem("memos") || "[]");
  },
  computed: {
    memo() {
      let id = parseInt(this.$route.params.id);
      return this.memos[id];
    },
    id() {
      return parseInt(this.$route.params.id);
    },
  },
};
</script>

<template>
  <MemoForm :memo="memo" :id="id" />
</template>
