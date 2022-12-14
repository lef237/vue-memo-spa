<script setup>
import MemoForm from "@/components/MemoForm.vue";
</script>

<script>
export default {
  data() {
    return {
      memo: "",
    };
  },
};
</script>

<template>
  <MemoForm :memo="memo" />
</template>
