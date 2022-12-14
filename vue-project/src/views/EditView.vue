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
  // ここをmountedにすると、下のmemo.titleが読み込まれずエラーが出るので注意
  created() {
    this.memos = JSON.parse(localStorage.getItem("memos") || "[]");
  },
  computed: {
    memo() {
      let id = parseInt(this.$route.params.id);
      // console.log(id);
      // console.log(this.memos);
      // console.log(this.memos[id]);
      return this.memos[id];
    },
    id() {
      return parseInt(this.$route.params.id);
    },
  },
};
</script>

<template>
  <!-- Edit View: {{ $route.params.id }} -->
  <!-- <p>{{ memo }}</p> -->
  <p>{{ memo.content }}</p>
  <p>{{ id }}</p>

  <!-- 後でここにidも追加してformで受け取れるようにする -->
  <MemoForm :memo="memo" :id="id" />
</template>
