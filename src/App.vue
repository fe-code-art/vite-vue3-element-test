<script setup lang="ts">
import { ref } from "vue";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
// import ABC from "./components/ABC.vue";
import HelloWorld from "./components/HelloWorld.vue";
import ViewABc from "./views/ABC.vue";

const locale = ref(zhCn);
</script>

<template>
  <ElConfigProvider :locale="locale">
    <!-- <dataMore-ABC />
    ------------
    <view-ABC />
    ------------- -->
    <ViewABc></ViewABc>
    <el-button type="primary">Primary</el-button>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <el-button type="primary">Primary</el-button>
    <el-pagination
      v-model:currentPage="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination> -->
  </ElConfigProvider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
