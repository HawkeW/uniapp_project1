<template>
  <view class="main">
      <view style="transition:ease;transition-duration: 2s;transition-delay: inherit;" v-if="isReady">
        <view class="current-week">第{{ week }}周</view>
        <view class="wrapper">
          <view class="progress-bg"></view>
          <weekly-status class="status" :status="user.status"></weekly-status>
         <view class="status-user">
            <view class="user-info">{{ user.groupName }}</view>
            <view class="user-info">{{ user.userName }}</view>
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
  import {
    getWeeklyStatus
  } from '../../api'
  import {
    mapState,
    mapMutations
  } from 'vuex'
  import weeklyStatus from '../../components/weeklyStatus'

  export default {
    computed: {
      ...mapState(['week', 'user'])
    },
    data() {
      return {
        isReady: false
      }
    },
    methods: {
      ...mapMutations({
        login: 'LOGIN',
        updateUser:'UPDATE_USER'
      }),
      requestStatus(){
        getWeeklyStatus(this.user.userId).then(res => {
          if (res[1].data.infoCode === 500) {
            uni.showToast({
              icon: 'none',
              title: res[1].data.infoText
            })
          } else {
            let params = this.user;
            params.status  = res[1].data.status;
            this.updateUser(params);
            this.isReady = true;
          } 
        })
      }
    },
    components: {
      weeklyStatus
    },
    onLoad() {
      this.requestStatus();
    },
    onPullDownRefresh() {
      this.requestStatus();
      setTimeout(function() {
        uni.stopPullDownRefresh();
      }, 1000);
    },
    onReady() {
      // setTimeout(function() {
      //         uni.hideLoading();
      // }, 1000);

    },
    
  }
</script>

<style>
  @import url("../../src/css/reset.css");
  
  .main {
    margin: 0 auto;
    text-align: center;
    align-items: center;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  
  .current-week {
    margin: 120upx auto;
  }

  .wrapper {
    position: relative;
    color: #000;
    /* border: 2px solid #000; */
    /* width: 700upx; */
    height: 550upx;
  }

  .progress-bg {
    position: absolute;
    left: 110upx;
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

  .status {
    /* position: absolute; */
  }

  .ask-leave {
    color: #007AFF;
  }

  .status-user {
    margin-top: 0upx;
  }

  .user-info {
    /* margin: 12upx; */
    color: #0D447B;
    font-size: 34upx;
    font-family: PingFang SC;
    font-weight: 400;
    letter-spacing: 2upx;
    opacity: 1;
  }
</style>
