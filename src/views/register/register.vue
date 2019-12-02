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
