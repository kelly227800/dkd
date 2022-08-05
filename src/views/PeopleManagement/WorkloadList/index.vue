<template>
  <!-- <h1>运营工单</h1> -->
  <div>
    <div class="search">
      <SearchBox
        isBasic
        inputLabel="人员搜索:"
        inputPlaceholder="请输入"
        isSelect
        selectLabel="角色:"
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
      optionList: ['运营员', '维修员'],
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
