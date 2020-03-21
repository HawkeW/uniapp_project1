<template>
	<view class="leave">
		<view class="wrapper">
		  <view class="left-text">
		    <text>本周周报</text>
		  </view>
		  <view class="num">
		    <text>已请假</text>
		  </view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'after-leave',
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.leave{
 position: absolute;
    width:500upx;
    height: 500upx;
}
  .wrapper {
    position: relative;
    left: 100upx;
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
