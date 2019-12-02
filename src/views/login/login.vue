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
export default {
  components: {
    LoginForm
  },
  methods: {
    handleSubmit (param) {
      this.$post('/api/login',param).then((res)=>{
        if(res.err_code === 1){
          this.$Message.error(res.message)
        } else if(res.err_code === 0){
          this.$store.commit('setUserInfo',res.userInfo)
          localStorage.setItem('username',res.userInfo.username)
          this.$Message.info(res.message)
          setTimeout(() => {
            this.$router.push({
              name: this.$config.homeName
            })
          }, 500);
        } else {
          this.$Message.error(res.message)
        }
      })
    }
  }
}
</script>

<style>

</style>
