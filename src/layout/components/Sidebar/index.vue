<template>
  <div>
    <!-- <logo v-if="showLogo" :collapse="isCollapse" /> :collapse="isCollapse"-->
    <!-- <el-menu
      class="sidebar-container"
      default-active="2"
      background-color="#f8fafd"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu> -->

    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
// import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem },
  computed: {
    // ...mapGetters([
    //   'sidebar'
    // ]),
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    variables() {
      return variables
    },
    // isCollapse() {
    //   return !this.sidebar.opened
    // }
  },
  // methods: {
  //   handleOpen(key, keyPath) {
  //     console.log(key, keyPath)
  //   },
  //   handleClose(key, keyPath) {
  //     console.log(key, keyPath)
  //   },
  // },
}
</script>

<style lang="scss" scoped>
// .el-scrollbar {
//   height: 100%;
//   overflow: hidden;
//   position: relative;
// }
// .el-scrollbar__wrap {
//   overflow-x: hidden !important;
//   overflow: scroll;
//   height: 100%;
// }
// ::v-deep .sidebar-container {
//   width: 167px !important;
//   min-height: calc(100% - 60px);
//   position: fixed;
//   font-size: 0;
//   top: 60px;
//   bottom: 0;
//   left: 0;
//   z-index: 1001;
//   overflow: hidden;
// }
// .el-menu {
//   list-style: none;
//   position: relative;
//   margin: 0;
//   padding-left: 0;
//   border: none;
//   height: 100%;
//   width: 100% !important;
// }
</style>
