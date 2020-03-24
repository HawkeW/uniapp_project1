<template>
  <view class="main">
    <view class="login">
      <view class="login-logo"></view>
    </view>
    <view class="login-info">
      <form @submit="toLogin">
        <label class="login-input flex">
          <view class="mail icon "></view>
          <input type="text" v-model="info.email" placeholder="邮箱" />
        </label>
        <label class="login-input flex">
          <view class="password icon"></view>
          <input password=true v-model="info.password" placeholder="密码" />
        </label>
        <view class="login-btn btn">
          <button form-type="submit" @tap="toLogin" type="primary">登录</button>
        </view>
        <view class="login-signup">
          <navigator url="/pages/regist/regist">
              <button type="default" class="btn">
                注册账号
             </button>
           </navigator>
        </view>
      </form>
    </view>

  </view>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  import {
    queryLogin
  } from '../../api'
  export default {
    computed: {
      ...mapState(['user'])
    },
    data() {
      return {
        info: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      ...mapMutations({
        login: 'LOGIN',
        setWeek: 'SET_WEEK',
        updateUser: 'UPDATE_USER'
      }),
      toLogin() {
        if (this.checkFormat()) { //不为空则进行登录请求
          queryLogin(this.info).then(res => {
            if (res[1].data.infoCode === "200") {
              uni.showToast({
                icon: 'none',
                title: '登录成功'
              })
              setTimeout(() => {
                //设置用户
                this.setUser(res[1].data);
                //vuex记录user,week数据,设置登录状态hasLogin为True
                this.login(this.user);
                this.setWeek(res[1].data.currWeek);
                this.toPage(this.user);
              }, 2000);
            } else { //为空则提示报错信息
              uni.showToast({
                icon: 'none',
                title: res[1].data.infoText
              })
            }
          })
        }
      },
      setUser(data) {
        let params = {
          userId: data.userId,
          groupId: data.groupId,
          groupName: data.groupName,
          status: data.status,
          userName: data.userName,
        };
        this.updateUser(params);
      },
      toPage(user) {
        if (user.groupId !== 0) {
          uni.reLaunch({
            url: '/pages/main/main'
          })
        } else {
          uni.reLaunch({
            url: '/pages/group/group'
          })
        }
      },
      checkFormat() {
        if (this.info.email === "") {
          uni.showToast({
            icon: 'none',
            title: '请填写邮箱'
          });
          return false;
        } else if (!this.info.password) {
          uni.showToast({
            icon: 'none',
            title: '请填写密码'
          });
          return false;
        }
        return true;
      }
    }
  }
</script>

<style>
  @import url("../../src/css/reset.css");

  .login {
    height: 280upx;
    margin: 140upx auto;
    text-align: center;
  }

  .login-logo {
    margin: 0 auto;
    height: 280upx;
    width: 140px;
    background: url(../../static/logo.png) no-repeat;
  }

  .icon {
    display: inline-block;
    height: 22px;
    width: 40px;
    margin: 0 auto;
  }

  .mail {
    background: url(../../static/mail.png) no-repeat;
  }

  .password {
    background: url(../../static/password.png) no-repeat;
  }

  .login-info {
    margin: 50upx auto;
    /* width: 800upx; */
  }

  .login-input {
    margin: 6upx 20upx 20upx 50upx;
    padding-bottom: 10px;
    width: 650upx;
    display: flex;
    border-bottom: 2upx solid #919191;
  }

  .input-text {
    margin: 6upx 20upx 10upx 0;
    width: 100upx;
  }

  .login-btn {
    padding-top: 100upx;
  }
</style>
