<template>
  <el-form :inline="true" :model="searchForm" class="searchForm" size="medium">
    <el-form-item :label="inputLabel">
      <el-input
        v-model="searchForm.input"
        :placeholder="inputPlaceholder"
        v-if="isBasic"
      ></el-input>
    </el-form-item>
    <el-form-item :label="selectLabel">
      <el-select
        v-model="searchForm.select"
        :placeholder="selectPlaceholder"
        v-if="isSelect"
      >
        <el-option
          v-for="(item, index) in optionList"
          :value="item"
          :key="index"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" icon="el-icon-search" @click="onSubmit" v-if="haveBtn"
        >查询</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      searchForm: {
        input: '',
        select: '',
      },
    }
  },
  props: {
    inputLabel: {
      type: String,
    },
    selectLabel: {
      type: String,
    },
    inputPlaceholder: {
      type: String,
    },
    selectPlaceholder: {
      type: String,
    },
    isBasic: {
      type: Boolean,
      default: false,
    },
    isSelect: {
      type: Boolean,
      default: false,
    },
    haveBtn: {
      type: Boolean,
      default: false,
    },
    optionList: {
      type: Array,
    },
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
  },
}
</script>

<style scoped lang="scss">
.el-form-item__label {
    font-size: 14px;
    font-weight: 400;
    color: #606266;
    padding: 0 12px 0 0;
}
.el-input__inner {
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #d8dde3;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    outline: none;
    padding: 0 15px;
    width: 100%;
}
.el-button {
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  height: 36px;
  padding: 0px;
  background-color: rgb(95, 132, 255);
  border: none;
}
</style>
