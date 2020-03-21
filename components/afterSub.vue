<template>
  <view class="weekly">
    <view class="wrapper">
      <view class="left-text">
        <text>本周周报</text>
      </view>
      <view class="num">
        <text>已提交</text>
      </view>
    </view>

  </view>
</template>

<script>
  export default {
    name: 'after-sub',
    data() {
      return {

      };
    }
  }
</script>

<style>
  .weekly {
    position: absolute;
    width:500upx;
    height: 500upx;
  }

  .wrapper {
    position: relative;
    top:140upx;
  }

  .left-text {
    height: 56upx;
    font-size: 40upx;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 56upx;
    color: #0D447B;
    opacity: 1;
    margin-bottom: 20upx;
  }

  .num {
    font-size: 80upx;
    font-weight: 400;
    line-height: 80upx;
    color: rgba(0, 0, 0, 1);
    opacity: 1;
  }
</style>
