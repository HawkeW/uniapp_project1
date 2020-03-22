<template>
  <view>
    <view class="signup-info">
      <view class="input-block">
        <label class="signup-input flex">
          <view class="name icon"></view>
          <input type="text" placeholder="昵称" v-model="userInfo.userName" @blur="checkName" />
        </label>
        <view class="input-error alert" v-if="!nameFormat">字符长度4-16</view>
      </view>
      <view class="input-block">
        <label class="signup-input flex">
          <view class="mail icon"></view>
          <input type="text" placeholder="邮箱" v-model="userInfo.email" @blur="checkEmail" />
        </label>
        <view class="input-error alert" v-if="!emailFormat">邮箱格式错误</view>
      </view>
      <view class="input-block">
        <label class="signup-input flex">
          <view class="qq icon"></view>
          <input type="text" placeholder="QQ号" v-model="userInfo.QQ" />
        </label>
      </view>
      <view class="input-block">
        <label class="signup-input flex">
          <view class="password icon"></view>
          <input type="password" placeholder="密码" v-model="userInfo.password" />
        </label>
      </view>
      <view class="input-block">
        <label class="signup-input flex">
          <view class="password icon"></view>
          <input type="password" placeholder="请再次输入密码" v-model="password_confirm" />
        </label>
      </view>
    </view>
    <button form-type="submit" @tap="signup" type="primary">注册</button>
  </view>
</template>

<script>
import { queryRegist } from '../../api';
export default {
  data() {
    return {
      nameFormat: true, //昵称报错
      emailFormat: true, //邮箱报错
      userInfo: {
        userName: '',
        email: '',
        QQ: '',
        password: ''
      },
      password_confirm: ''
    };
  },
  methods: {
    signup() {
      if (!this.checkFormat() || !this.nameFormat || !this.emailFormat) {
        return;
      }
      // 请求数据，查询注册结果
      queryRegist(this.userInfo).then(res => {
        if (res[1].data.infoCode === '500') {
          uni.showToast({
            icon: 'none',
            title: res[1].data.infoText
          });
        } else {
          uni.showToast({
            icon: 'none',
            title: '注册成功'
          });
          //延迟两秒自动跳转
          setTimeout(() => this.toLogin(), 2000);
        }
      });
      // data{
      //   currWeek:null,
      //   groupId:0,
      //   groupName:null,
      //   groups:null,
      //   infoCode :"200",
      //   infoText:"注册成功",
      //   status:null,
      //   userId:727,
      //   userName:"test"
      // }
    },
    toLogin() {
      uni.reLaunch({ url: '../login/login' });
    },
    checkFormat() {
      //检查是否有项目为空
      if (!this.userInfo.userName) {
        uni.showToast({
          icon: 'none',
          title: '请填写用户名再注册'
        });
        return false;
      } else if (!this.userInfo.email) {
        uni.showToast({
          icon: 'none',
          title: '请填写邮箱再注册'
        });
        return false;
      } else if (!this.userInfo.QQ) {
        uni.showToast({
          icon: 'none',
          title: '请填写qq号再注册'
        });
        return false;
      } else if (!this.userInfo.password) {
        uni.showToast({
          icon: 'none',
          title: '请填写密码再注册'
        });
        return false;
      } else if (!this.password_confirm) {
        uni.showToast({
          icon: 'none',
          title: '请填写确认密码再注册'
        });
        return false;
      } else if (this.userInfo.password !== this.password_confirm) {
        uni.showToast({
          icon: 'none',
          title: '密码不正确，请重新填写'
        });
        return false;
      } else {
        return true;
      }
    },
    checkEmail() {
      let e = /^([a-zA-Z0-9.-])+\@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
      this.emailFormat = e.test(this.userInfo.email);
    },
    //验证昵称长度，4-16为正确
    checkName() {
      if (this.userInfo.userName.length > 16 || this.userInfo.userName.length < 4) {
        this.nameFormat = false;
      } else {
        this.nameFormat = true;
      }
    }
  }
};
</script>

<style>
@import url('../../src/css/reset.css');
.signup-info {
  margin: 150upx 40upx 50upx 40upx;
}

.icon {
  height: 52upx;
  width: 52upx;
  margin: 0 30upx 20upx 30upx;
}

.mail {
  background: url(../../static/mail.png) no-repeat;
}

.password {
  background: url(../../static/password.png) no-repeat;
}
.qq {
  background: url(../../static/QQ.png) no-repeat;
}
.name {
  background: url(../../static/name.png) no-repeat;
}

.input-block {
  position: relative;
  height: 112upx;
  padding: 20upx 0;
  box-sizing: border-box;
}
.signup-input {
  position: absolute;
  height: 112upx;
}
.signup-input > input {
  height: 60upx;
  width: 550upx;
  border-bottom: 1px solid #eeeeee;
}

.input-text {
  text-align: center;
  margin-top: 6upx;
  width: 150upx;
}

.input-error {
  position: absolute;
  top: 35upx;
  right: 2%;
  text-align: right;
}
.signup-btn {
  width: 200upx;
  margin: 0 auto;
}
</style>
