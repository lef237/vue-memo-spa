import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: useLocalStorage("count", 0),
  }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++;
    },
  },
});
