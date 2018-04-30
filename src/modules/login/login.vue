<template>
  <div class="login-container">
    <transition :name="transName">
      <div v-show="showLoginbox" class="login" @keyup.enter="doLoginHdl">
        <t-form
          ref="login"
          :rules="rules"
          :model="loginForm"
          :label-span="2"
          label-position="left"
          size="sm">
          <t-form-item label="用户名" prop="username">
            <t-input v-model.trim="loginForm.username" placeholder="管理员: admin, 游客: guest"></t-input>
          </t-form-item>
          <input v-if="false" type="text">
          <t-form-item label="密码" prop="password">
            <t-input v-model="loginForm.password" type="password" placeholder="密码: 11"></t-input>
          </t-form-item>
          <t-form-item class="verify-code" label="验证码" prop="verify">
            <div class="d-flex justify-content-between">
              <t-input v-model="loginForm.verify" class="col-5" placeholder="验证码itzx"></t-input>
              <span class="code col-3 border"><img src="/static/images/code.png" alt=""></span>
            </div>
          </t-form-item>
          <t-form-item label="记住我" prop="rember">
            <t-switch v-model="loginForm.rember">
              <span slot="open">开</span>
              <span slot="close">关</span>
            </t-switch>
          </t-form-item>
          <t-button type="primary" block @click="doLoginHdl">登录</t-button>
        </t-form>
        <div class="logo"><img src="/static/images/china-post-logo.svg" alt=""></div>
      </div>
    </transition>
    <div id="canvas-bg"><canvas id="stage" width="100%" height="100%"></canvas></div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Doodle from './bgConvas'
const KEY_USER_NAME = 'chinapost-user'

export default {
  data() {
    return {
      showLoginbox: false,
      transName: 'flipY-reverse-slow',
      loginForm: {
        username: '',
        password: '',
        verify: 'itzx',
        rember: true
      },
      rules: {
        username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
        verify: [{ required: true, message: '验证码不能为空', trigger: 'blur' }]
      }
    }
  },
  computed: {
    ...mapState({
      loginState: state => state.login.logined
    })
  },

  created() {
  },
  mounted() {
    let colClouds = [236, 240, 241]
    let colWetasphalt = [52, 73, 94]
    let colGreen = [125, 240, 72]
    let palette = [colGreen, colClouds, colWetasphalt, colWetasphalt, colWetasphalt, colWetasphalt, colWetasphalt]
    let colMidnighterblue = [24, 28, 40]
    let stageCanvas = document.querySelector('#stage')
    // eslint-disable-next-line
    new Doodle({
      canvas: stageCanvas,
      maxParticles: 100,
      backgroundColor: colMidnighterblue,
      palette: palette
    })
    this.showLoginbox = true
  },
  methods: {
    ...mapActions('login', {
      doLoginAcs: 'doLogin'
    }),
    doLoginHdl() {
      this.$refs.login.validate(passed => {
        if (passed) {
          this.doLoginAcs(this.loginForm).then(() => {
            if (this.loginForm.rememberMe === true) {
              localStorage.setItem(KEY_USER_NAME, this.loginForm.username)
            } else {
              localStorage.removeItem(KEY_USER_NAME)
            }
            this.$router.push({ name: 'dashboard' })
          }).catch(err => {
            this.$Message.danger(err)
          })
        } else {
          this.showLoginbox = false
          setTimeout(() => {
            this.showLoginbox = true
          }, 110)
          this.$Message.danger('请输入正确的登录信息。')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .login {
    width: 400px;
    margin: 0 auto;
    align-items:center;
    position: relative;
    z-index: 2;
    padding: 50px 30px 30px;
    background: #fff;
    border-radius: 10px;
  }
  .verify-code {
    .col-5 {
      padding-left: 0;
      padding-right: 0;
      width: 66.66%;
    }
    .code {
      padding-left: 0;
      padding-right: 0;
      height: 32px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
  #canvas-bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }
  .logo {
    background: #fff;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: absolute;
    top: -35px;
    left: 50%;
    margin-left: -40px;
    text-align: center;
    img {
      width: 60%;
      /* margin: 0 auto; */
      margin-top: 15px;
      display: inline-block;
    }
  }
}

</style>
