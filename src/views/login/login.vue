<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">没有账号? <a href="/register">点击创建</a>.</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
// import { setToken, getToken } from '@/libs/util'
export default {
  components: {
    LoginForm
  },
  methods: {
    handleSubmit (param) {
      this.$post('/api/login',param).then((res)=>{
        this.$store.commit('setToken',res.token)
        this.$router.push({
          name: this.$config.homeName
        })
      })
    }
  }
}
</script>

<style>

</style>
