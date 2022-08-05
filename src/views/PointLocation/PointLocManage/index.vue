<template>
  <!-- <h1>运营工单</h1> -->
  <div>
    <div class="search">
      <SearchBox
        isBasic
        inputLabel="点位搜索:"
        inputPlaceholder="请输入"
        isSelect
        selectLabel="区域搜索:"
        selectPlaceholder="请选择"
        haveBtn
        :optionList="optionList"
      />
    </div>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox'
export default {
  data() {
    return {
      optionList: [
        '城北街道',
        '西直门街道',
        '建材城',
        '金燕龙',
        '霍营街道',
        '北京平西府街道',
        '北京前门街道',
      ],
    }
  },
  components: {
    SearchBox,
  },
  created() {},

  methods: {},
}
</script>

<style scoped>
.search {
  display: flex;
  height: 64px;
  align-items: center;
  padding-top: 22px;
  margin-bottom: 20px;
  padding-left: 17px;
  background-color: #fff;
}
</style>
