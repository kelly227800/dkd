<template>
  <div class="app">
    <el-form class="form" label-width="80px">
      <el-form-item label="工单编号:">
        <el-input placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="工单状态:" prop="region">
        <el-select v-model="form.region" placeholder="请选择">
          <el-option label="代办" value="daiban"></el-option>
          <el-option label="进行" value="jinxing"></el-option>
          <el-option label="取消" value="quxiao"></el-option>
          <el-option label="完成" value="wancheng"></el-option>
        </el-select>
      </el-form-item>
      <el-button type="primary" icon="el-icon-search">查询</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        region: ''
      }
    }
  },

  created() {},

  methods: {}
}
</script>

<style scoped lang="scss">
.app {
  .form {
    width: 100%;
    display: flex;
    height: 64px;
    align-items: center;
    margin-bottom: 20px;
    padding-left: 17px;
    background-color: #fff;
    .el-form-item__label {
      color: #606266;
      font-weight: 400 !important;
    }
    .el-form-item {
      margin: auto 0;
    }
    .el-input__inner {
      z-index: 99;
      height: 36px;
      line-height: 36px;
    }
    .el-button--primary {
      margin-left: 10px;
    }
  }
}
</style>
