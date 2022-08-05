<template>
  <!-- <h1>运营工单</h1> -->
  <div>
    <div class="search">
      <SearchBox
        isBasic
        inputLabel="策略搜索:"
        inputPlaceholder="请输入"
        haveBtn
      />
    </div>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox'
export default {
  data() {
    return {
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
