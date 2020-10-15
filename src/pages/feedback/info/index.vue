<template>
  <div id="info">
    <el-card shadow="never">
      <el-page-header @back="$back()" content="留言详情"></el-page-header>
      <el-divider></el-divider>
      <el-form @submit.native.prevent label-width="150px" size="small" :model="form" ref="form">
        <el-form-item label="用户名称">
          <span style="width:500px">{{form.name}}</span>
        </el-form-item>

        <el-form-item label="留言来源">
          <span style="width:500px" v-if="form.type===1">官网</span>
          <span style="width:500px" v-else-if="form.type===2">小程序</span>
          <span style="width:500px" v-else-if="form.type===3">微信公众号</span>
        </el-form-item>

        <el-form-item label="联系方式">
          <span style="width:500px">{{form.phone}}</span>
        </el-form-item>

        <el-form-item label="用户留言">
          <span style="width:500px">{{form.content}}</span>
        </el-form-item>

        <el-form-item label="留言时间">
          <span style="width:500px">{{form.add_time}}</span>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>