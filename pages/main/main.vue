<template>
  <view class="main">
    <view class="current-week">第{{ week }}周</view>
    <view>
      <view class="wrapper">
        <view class="progress-bg"></view>
        <!--   <view class="progress">
          <view class="progress-bar"></view>
        </view> -->
        <view class="status">
          <view class="status-info">
            <view class="before-sub" v-if="user.status === 1">
              <view class="left-time">
                <view class="left-text">本周剩余时间</view>
                <view class="left-detail">
                  <text class="num">{{ leftTime.left_days }}</text>
                  <text>天</text>
                  <text class="num">:{{ leftTime.left_hours }}</text>
                  <text>时</text>
                  <text class="num">:{{ leftTime.left_minutes }}</text>
                  <text>分</text>
                </view>
              </view>
            </view>
            <view class="after-sub" v-else-if="user.status === 2">
              <view class="left-time">
                <view class="left-text">本周周报</view>
                <view class="left-detail num">已提交</view>
              </view>
            </view>
            <view class="after-leave" v-else-if="user.status ===3">
              <view class="left-time">
                <view class="left-text">本周周报</view>
                <view class="left-detail num">已请假</view>
              </view>
            </view>
            <view class="status-user">
              <view class="user-info">{{ user.groupName }}</view>
              <view class="user-info">{{ user.userName }}</view>
            </view>
          </view>
        </view>
      </view>

      <view v-if="user.status ===1 ">
        <navigator url="/pages/submit/submit"><button type="primary">提交周报</button></navigator>
        <navigator url="/pages/leave/leave"><text class="ask-leave">我要请假</text></navigator>
      </view>

    </view>

  </view>
</template>

<script>
  import dealWithTime from '../../src/util/dealWithTime.js'
  import countDownCircle from '../../components/countDownCircle.vue'
  import {
    getWeeklyStatus
  } from '../../api'
  import {
    mapState,
    mapMutaions
  } from 'vuex'

  export default {
    computed: {
      ...mapState(['week', 'user'])
    },
    data() {
      return {
        leftTime: {
          left_days: 0,
          left_hours: 0,
          left_minutes: 0,
          left_seconds: 0,
        },
      }
    },
    components: {
      countDownCircle
    },
    onLoad() {
      // 获取剩余时间
      this.getLeftTime();
      //请求用户周报数据
      getWeeklyStatus(this.user.userId).then(res => {
        console.log(res[1])
        if (res[1].data.infoCode === 500) {
          uni.showToast({
            icon: 'none',
            title: res[1].data.infoText
          })
        } else {
          this.user.status = res[1].data.status;
        }
      })
    },
    methods: {
      getLeftTime() {
        this.leftTime = dealWithTime();
      }
    }
  }
</script>

<style>
  @import url("../../src/css/reset.css");
  .main {
    margin: 20upx;
    text-align: center;
    align-items: center;
  }

  .current-week {
    margin: 120upx auto;
  }

  .wrapper {
    position: relative;
    color: #000;
    /* border: 2px solid #000; */
    width: 700upx;
    height: 550upx;
  }

  .progress-bg {
    position: absolute;
    left: 80upx;
    top: 5upx;
    /*  border: 8upx  #707070 solid; */
    border: 8upx #707070 solid;
    border-radius: 530upx;
    /*    border-radius: ; */
    border-bottom: 8upx solid transparent;
    width: 265px;
    height: 530upx;
    box-shadow: #e5e5e5;
  }
  .status{
    position: absolute;
  }
  .status-info {
    position: relative;
    margin-left: 76upx;
    box-sizing: border-box;
    padding-top: 140upx;
    height: 500upx;
  }

  .left-text {
    height: 56upx;
    font-size: 40upx;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 56upx;
    color: #0D447B;
    opacity: 1;
  }

  .left-detail {
    width: 558upx;
    height: 110upx;
    padding-top: 40upx;
    line-height: 110upx;
    text-justify: auto;
  }

  .num {
    font-size: 110upx;
    font-family: digital;
    font-weight: 400;
    line-height: 46upx;
    color: rgba(0, 0, 0, 1);
    opacity: 1;
  }

  .status-user {
    margin-top: 70upx;
  }

  .user-info {
    margin: 12upx;
    color: #0D447B;
    font-size: 34upx;
    font-family: PingFang SC;
    font-weight: 400;
    letter-spacing: 2upx;
    opacity: 1;
  }

  .ask-leave {
    color: #007AFF;
  }
</style>
