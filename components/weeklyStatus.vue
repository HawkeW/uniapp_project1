<template>
    <view class="status-info">
        <view class="left-time">
          <view class="left-text ">
            <text v-if="status === 1">本周剩余时间</text>
            <text v-else>本周周报</text>
            </view>
          <view class="left-detail" v-if="status === 1">
            <text class="num">{{ leftTime.left_days }}</text>
            <text>天</text>
            <text class="num">:{{ leftTime.left_hours }}</text>
            <text>时</text>
            <text class="num">:{{ leftTime.left_minutes }}</text>
            <text>分</text>
          </view>
           <view class="left-detail num">
             <text  v-if="status === 2">已提交</text>
             <text  v-if="status === 3">已请假</text>
             </view>
        </view>
    </view>
</template>

<script>
  import dealWithTime from '../src/util/dealWithTime.js'
  export default {
    name:'weekly-status',
    computed:{
    },
    props:['status'],
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
          left_seconds: 0,
        },
      };
    },
    methods:{
      getLeftTime() {
        this.leftTime = dealWithTime();
      }
    }
  }
</script>

<style>
  .status-info {
    position: relative;
    box-sizing: border-box;
    padding-top: 140upx;
    height: 420upx;
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
    /* width: 558upx; */
    height: 110upx;
    padding-top: 40upx;
    line-height: 110upx;
    text-align: center;
  }

  .num {
    font-size: 110upx;
    font-family: digital;
    font-weight: 400;
    line-height: 46upx;
    color: rgba(0, 0, 0, 1);
    opacity: 1;
  }


</style>
