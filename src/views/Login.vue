<script setup lang="ts">
import { reactive } from 'vue';
import { ElMessage } from 'element-plus';
import { loginType } from '../types/login';

const from = reactive<loginType>({
  userName: '',
  passWord: '',
});

function onSubmit() {
  if (!from.userName) {
    console.error(12121);
    ElMessage({
      type: 'error',
      message: '1212',
      duration: 1000000,
    });
    return;
  }
}
</script>

<template>
  <div class="login">
    <div class="loginBox">
      <el-form ref="form" label-width="60px">
        <el-form-item label="用户名">
          <el-input v-model="from.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input show-password v-model="from.passWord"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="less" scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 250px;
  position: absolute;
  left: 0;
  top: 0;
  .loginBox {
    width: 500px;
  }
}
/deep/ .el-button--primary {
  width: 100%;
}
</style>
