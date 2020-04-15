<template>
  <div class="login">
    <div class="title">MuKe Wange</div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="请输入您的账号"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入您的密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
      let that = this
      setTimeout(() => {
        that.$store.commit('login',values)
        that.$store.commit('setMenberInfo',{
          userStatus:3,
          userVipLevel:1
        })
        that.$notify({ type: 'success', message: '登录成功' });
        that.$router.push('/index')
      },300)
    },
  },
}
</script>
<style lang="scss" scoped>
  .login {
    width:100%;
    height:100%;
    .title {
      width: 100%;
      height: 12rem;
      line-height: 12rem;
      font-size: 2rem;
      font-weight: 600;
    }
  }
</style>
