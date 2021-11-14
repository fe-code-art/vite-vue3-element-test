import { ref } from 'vue'

export function useCount() {
  const count = ref(10)

  function countAddHandle() {
    count.value--
  }
  return {
    count,
    countAddHandle
  }
}