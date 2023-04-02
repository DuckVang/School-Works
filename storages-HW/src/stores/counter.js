import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useCounterStore = defineStore("counter", () => {
  const countSession = useStorage("countSession", 0, sessionStorage);
  const countLocal = useStorage("countLocal", 0);
  const doubleCount = computed(() => count.value * 2);
  function incrementSession() {
    
    countSession.value++
  }
  function incrementLocal() {
    
    countLocal.value++;
  }

  return { countLocal,countSession, doubleCount, incrementLocal,incrementSession };
});
