<template>
  <div id="dashboard">
    <div class="block" v-loading="loading">
      <ve-line v-bind:data="chartData" :extend="extend" :settings="chartSettings"></ve-line>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>