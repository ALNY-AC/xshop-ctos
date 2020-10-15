<template>
  <div id="login">
    <div class="login-box">
      <div class="title"></div>
      <div class="form-box">
        <el-form @submit.native.prevent :model="form" size="large" :rules="rules">
          <el-form-item prop="phone">
            <el-input prefix-icon="el-icon-user" v-model="form.account" placeholder="请输入账户"></el-input>
          </el-form-item>
          <el-form-item prop="user_pwd">
            <el-input
              prefix-icon="el-icon-lock"
              type="password"
              v-model="form.password"
              placeholder="请输入密码"
              @keydown.enter.native.stop="submit"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button
              :disabled="loading"
              :loading="loading"
              type="primary"
              class="block"
              @click="submit"
            >登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>