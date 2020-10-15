<template>
  <div id="liuyan">
    <el-card shadow="never" header='反馈管理'>
 
      <el-table :data="list" row-key="id" size="mini"  style="width: 100%" border>
        <el-table-column align="left" prop="id" width="80" label="id"></el-table-column>
        <el-table-column align="left" prop="user_id" width="80" label="用户id"></el-table-column>
        <el-table-column align="left" prop="content" label="内容"></el-table-column>
        <el-table-column align="center" prop="add_time" width="200" label="留言时间"></el-table-column>
        <el-table-column align="center" width="140" label="操作" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" @click="$router.push(`/feedback/info?id=${scope.row.id}`)">查看详情</el-button>
            <!-- <el-button type="text" @click="del(scope.row.id)">删除留言</el-button> -->
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        style="margin:20px 0"
        :current-page.sync="query.page"
        :page-sizes="[5,10, 20, 30, 40]"
        :page-size.sync="query.page_size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>