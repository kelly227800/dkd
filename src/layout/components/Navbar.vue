<template>
  <div class="navbar">
    <img src="@/assets/imgs/layout-logo.png" alt="" class="logo" />
    <div class="right-menu">
      <el-row type="flex" align="middle">
        <el-col :span="5"
          ><div class="avatar">
            <img
              src="@/assets/imgs/layout-avatar.png"
              alt=""
            /></div
        ></el-col>
        <el-col :span="14"
          ><div class="welcome">
            <span>欢迎您，{{ $store.state.user.userInfo.userName }}</span>
          </div></el-col
        >
        <el-col :span="5">
          <el-tooltip
            class="item"
            effect="dark"
            content="退出登录"
            placement="bottom"
          >
            <el-button @click.native="logout"
              >退出<span class="el-icon-caret-bottom"></span
            ></el-button> </el-tooltip
        ></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import defaultImg from "@/assets/imgs/mydog.jpeg";
export default {
  data() {
    return {
      defaultImg,
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('user/logout')
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2002;
  background-image: url('~@/assets/imgs/layout-bg.png');
  background-size: cover;
  background-repeat: no-repeat;

  .logo {
    width: 88px;
    position: relative;
    top: 4px;
    margin-top: 6px;
    margin-left: 15px;
  }

  .right-menu {
    float: right;
    width: 240px;
    height: 100%;
    margin-right: 24px;
    font-size: 16px;
    color: #fff;

    .el-row {
      box-sizing: border-box;
      .avatar {
        height: 60px;
        line-height: 60px;
        img {
          margin-top: 12px;
        }
      }
      .welcome {
        height: 60px;
        line-height: 60px;
        cursor: pointer;
      }
      .item {
        margin-left: -20px;
        height: 60px;
        background: unset;
        color: #fff;
        border: none;
        font-size: 16px;
        .el-icon-caret-bottom {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
}
</style>
