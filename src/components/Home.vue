<script setup lang="ts">
import { ref, onMounted } from 'vue';
const count = ref<Number>(0);
onMounted(async () => {});
</script>

<template>
  <div class="home">
    <div class="count">{{ count }} 我是Home</div>
  </div>
</template>

<style lang="less" scoped>
.home {
  background: red;
  .count {
    color: #fff;
  }
}
</style>
