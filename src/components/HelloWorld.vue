<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useCount } from "../hooks/mathTest";

defineProps<{ msg: string }>();
const { count, countAddHandle } = useCount();

onMounted(() => {
  console.log("");
});
</script>

<template>
  <el-pagination
    v-model:currentPage="currentPage4"
    :page-sizes="[100, 200, 300, 400]"
    :page-size="100"
    layout="total, sizes, prev, pager, next, jumper"
    :total="400"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  >
  </el-pagination>
  <h1>hello {{ msg }}</h1>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
