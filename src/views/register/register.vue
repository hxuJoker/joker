<style lang="less">
  @import '../login/login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎注册" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
        </div>
        <p class="login-tip">已有账号? <a href="/login">点击登录</a>.</p>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
export default {
  components: {
    LoginForm
  },
  methods: {
    handleSubmit (param) {
      this.$post('/api/register',param).then((res)=>{
        this.$store.commit('setToken',res.token)
        this.$Message.info('注册成功')
        setTimeout(() => {
          this.$router.push({
            name: this.$config.homeName
          })
        }, 1000);
        
      })
    }
  }
}
</script>

<style>

</style>
