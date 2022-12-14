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
  },
};
</script>

<template>
  <!-- Edit View: {{ $route.params.id }} -->
  <!-- <p>{{ memo }}</p> -->
  <p>{{ memo.title }}</p>
</template>
