import { defineStore } from "pinia";
// import { useLocalStorage } from "@vueuse/core";

export const useMemosStore = defineStore("memos", {
  state: () => ({
    memos: ["aaa\nbbb", "ccc\nddd", "eee\nfff"],
    // 後で下をコメントアウトする
    // memos: useLocalStorage("memos", []),
  }),
  actions: {
    saveMemos(newMemo) {
      this.memos.push(newMemo);
    },
  },
});
