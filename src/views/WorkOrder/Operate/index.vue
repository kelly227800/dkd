<template>
  <!-- <h1>运营工单</h1> -->
  <div>
    <div class="search">
      <SearchBox
        isBasic
        inputLabel="工单编号:"
        inputPlaceholder="请输入"
        isSelect
        selectLabel="工单状态:"
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
      optionList: ['待办', '进行', '取消', '完成'],
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
