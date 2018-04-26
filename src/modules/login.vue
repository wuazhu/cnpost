<template>
  <div class="login-container">
    <div class="login">
      <t-form ref="login" :model="loginForm" :label-span="2" label-position="left" size="sm">
        <t-form-item label="用户名" prop="username">
          <t-input v-model.trim="loginForm.username" placeholder="请输入..."></t-input>
        </t-form-item>
        <input v-if="false" type="text">
        <t-form-item label="密码" prop="password">
          <t-input v-model="loginForm.password" type="password" placeholder="请输入..."></t-input>
        </t-form-item>
        <t-form-item label="记住我" prop="rember">
          <t-switch v-model="loginForm.rember">
            <span slot="open">开</span>
            <span slot="close">关</span>
          </t-switch>
        </t-form-item>
        <t-button type="primary" block @click="doLogin">登录</t-button>
      </t-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        rember: false
      },
      loginFormRule: []
    }
  },
  methods: {
    doLogin() {
      this.$refs.login.resetFields()
    }
  }
}
</script>

<style lang="less">
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
  }
}
</style>
