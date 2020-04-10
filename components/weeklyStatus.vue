<template>
  <view class="status-info">
    <view class="left-time">
      <view class="left-text ">
        <view class="text-center">
          <text v-if="status === 1">本周剩余时间</text>
         <text v-else>本周周报</text>
         </view>
      </view>
      <view class="left-detail" v-if="status === 1">
        <text class="num">{{ leftTime.left_days }}天 {{ leftTime.left_hours }} : {{ leftTime.left_minutes }} : {{ leftTime.left_seconds }}</text>
      </view>
      <view class="left-detail">
        <text class="num" v-if="status === 2">已提交</text>
        <text class="num" v-if="status === 3">已请假</text>
      </view>
    </view>
  </view>
</template>

<script>
import dealWithTime from '@/common/dealWithTime.js';
export default {
  name: 'weekly-status',
  computed: {},
  props: ['status'],
  created() {
    // 获取剩余时间
    this.getLeftTime();
  },
  data() {
    return {
      leftTime: {
        left_days: 0,
        left_hours: 0,
        left_minutes: 0,
        left_seconds: 0
      }
    };
  },
  methods: {
    getLeftTime() {
      this.leftTime = dealWithTime();
      setInterval(() => {
        this.leftTime = dealWithTime();
      }, 1000);
    }
  }
};
</script>

<style>
.status-info {
  position: relative;
}
.text-center{
  align-items: center;
}
.left-text {
  height: 56rpx;
  font-size: 18px;
  font-family: PingFang;
  font-weight: 600;
  line-height: 56rpx;
  opacity: 1;
}

.left-detail {
  /* width: 558upx; */
  margin-top: 24rpx;
  line-height: 64rpx;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
}
.num {
  /* width: 558upx; */
  margin-top: 24rpx;
  line-height: 64rpx;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
}
</style>
