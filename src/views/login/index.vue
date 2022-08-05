<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginFormRules"
      class="login-form"
      auto-complete="on"
    >
      <!-- logo图片-->
      <img src="@/assets/imgs/dkd-logo.png" alt="" class="login-logo" />
      <!-- 表单 ------------------------------------>

      <!-- 手机号 -->
      <el-form-item prop="loginName">
        <span class="iconfont dkd-shouji"></span>
        <el-input
          ref="loginName"
          v-model="loginForm.loginName"
          placeholder="请输入账号"
          name="loginName"
          type="text"
          auto-complete="on"
          maxlength="18"
        />
      </el-form-item>

      <!-- 密码 -->
      <el-form-item prop="password">
        <span class="iconfont dkd-suoding"></span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="请输入密码"
          name="password"
          auto-complete="on"
          maxlength="20"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon
            :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
          />
        </span>
      </el-form-item>

      <!-- 验证码 -->
      <el-row>
        <el-col :span="17">
          <el-form-item prop="code">
            <span class="iconfont dkd-anquanzhongxin"></span>
            <el-input
              ref="code"
              v-model="loginForm.code"
              placeholder="请输入验证码"
              name="code"
              type="text"
              auto-complete="on"
            />
          </el-form-item>
        </el-col>
        <el-col :span="7"
          ><div class="yzm" @click="clickCode">
            <img :src="responseURL" alt="" />
          </div>
        </el-col>
      </el-row>
      <!-- 登录按钮 -->
      <el-button
        class="loginBtn"
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click.native.prevent="login"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script>
import { sendImgCode } from '@/api'
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        loginName: 'admin',
        password: 'admin',
        code: '',
      },
      loginFormRules: {
        loginName: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
      },
      loading: false,
      passwordType: 'password',
      responseURL: '',
      clientToken: '',
    }
  },
  created() {
    this.sendImgCode()
  },
  methods: {
    // 得到请求随机数
    getclientToken() {
      var arr = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
      ]
      var client_token = ''
      for (var i = 0; i < 32; i++) {
        var id = parseInt(Math.random() * (arr.length - 1))
        client_token += arr[id]
      }
      return client_token
    },
    // 显示与隐藏密码
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    // 登录
    async login() {
      this.loading = true
      try {
        await this.$refs.loginForm.validate()
        const data = {
          loginName: this.loginForm.loginName,
          password: this.loginForm.password,
          code: this.loginForm.code,
          clientToken: this.clientToken,
          loginType: 0,
        }
        await this.$store.dispatch('user/getToken', data)
        this.$router.push('/home')
        this.$message.success('登录成功')
      } finally {
        this.loading = false
      }
    },
    // 请求图片验证码
    async sendImgCode() {
      try {
        this.clientToken = this.getclientToken()
        // console.log(this.clientToken)
        const res = await sendImgCode(this.clientToken)
        // console.log(res.request.responseURL)
        // console.log(res)
        this.responseURL = res.request.responseURL
      } catch (err) {
        this.$message({
          message: '请求图片验证码失败，请重试',
          type: 'error',
        })
      }
    },
    // 点击图片再次请求图片验证码
    clickCode() {
      this.sendImgCode()
    },
  },
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

// $bg: #283443;
$light_gray: #999;
$cursor: #999;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        // box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item__error {
    color: red;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #999;

.login-container {
  min-height: 100%;
  width: 100%;
  background: url('~@/assets/imgs/dkd-bg.png') no-repeat 0 0 / cover;
  //   background-color: $bg;
  //   overflow: hidden;
  // 登录框
  .login-form {
    position: absolute;
    width: 518px;
    height: 388px;
    top: 50%;
    left: 50%;
    margin-top: -194px;
    margin-left: -259px;
    padding: 76px 35px 0;
    background: #fff;
    -webkit-box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;
    // logo图片
    .login-logo {
      position: absolute;
      width: 96px;
      height: 96px;
      top: -46px;
      left: 50%;
      margin-left: -48px;
    }
    // 验证码
    .yzm {
      //   border: 1px solid blue;
      height: 52px;
      img {
        width: 100%;
      }
    }
  }
  .iconfont {
    padding: 6px 5px 6px 15px;
    color: #889aa4;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    font-size: 18px;
    &.dkd-suoding {
      font-size: 25px;
      padding: 6px 5px 6px 10px;
    }
    &.dkd-anquanzhongxin {
      font-size: 17px;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .loginBtn {
    width: 100%;
    height: 52px;
    background: linear-gradient(262deg, #2e50e1, #6878f0);
    opacity: 0.91;
    border-radius: 8px;
    color: #fff;
    text-shadow: 0 7px 22px #cfcfcf;
  }
  .el-form-item {
    width: 100%;
    height: 52px;
    margin-bottom: 24px;
    background: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    .el-form-item__content {
      line-height: 40px;
      position: relative;
      font-size: 14px;
    }
  }
}
</style>
