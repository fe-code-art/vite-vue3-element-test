<script setup lang='ts'>
import { ref, onMounted } from "vue";
const count = ref<Number>(0);
onMounted(async () => {});
</script>

<template>
  <div>{{count}}</div>
</template>

<style lang='less' scoped>
</style>