<template>
  <view class="leave">
    <view class="header">
      <view class="current-week">第{{ week }}周</view>
      <view class="user-info">{{ user.groupName }} :{{ user.userName }}</view>
    </view>
    <view class="content">
      <view class="input-area">
        <view class="weekly-title">
          <text>请假理由（必填）</text>
        </view>
        <input v-model="reason" />
			</view>
			<view class="input-area">
				<view class="weekly-title">
					<text>请假期限（必填）</text>
				</view>
				<radio-group name="" @change="radioChange" class="time-wrapper flex">
					<label class="selection"><radio :value="'1'"/><text>一周</text></label>
					<label class="selection"><radio :value="'2'" /><text>两周</text></label>
					<label class="selection"><radio :value="'3'" /><text>三周</text></label>
				</radio-group>
			</view>
		</view>
		<view class="btn"><button @tap="leave" type="primary">提交</button></view>
	</view>
</template>

<script>
  import { mapState, } from 'vuex'
  import { askLeave } from '../../api'
	export default {
    computed:{
      ...mapState(['week','user'])
    },
		data() {
			return {
				leaveTime:0,
        reason:''
			}
		},
		methods: {
      radioChange(evt){
        this.leaveTime = parseInt(evt.target.value)
      },
      leave( ){
        let params = { 
          userId: this.user.userId,
          weekNum: this.leaveTime,
          reason:this.reason,
          groupId:this.user.groupId
        }
        askLeave(params).then(res=>{
          if(res[1].data.infoCode === 500){
            uni.showToast({
              icon:'none',
              title:res[1].data.infoText
            })
          }else{
            setTimeout(()=>{
              uni.reLaunch({url:'/pages/main/main'})
            }, 2000);
            uni.showToast({
              icon:'none',
              title:res[1].data.infoText
            });
          }
        })
      }
		}
	}
</script>

<style>
	.leave{
		margin: 0 40upx;
		padding: 60upx 0;
    font: 32upx;
	}
	.weekly{
			margin: 0 40upx;
			padding: 60upx 0;
		}
		.header{
			height: 130upx;
		}
	.user-info{
	  margin-top: 40upx;
	  font-size: 32upx;
	}
	.input-area{
	  margin-top: 50upx;
	}
	.weekly-title{
	  font-size: 28upx;
    color: #0D447B;
		height: 42upx;
	  border-bottom: 1px #eeeeee solid;
    padding-bottom: 10upx;
	}
	
	.input-area >input{
	  display: block;
		height: 60upx;
		line-height: 40upx;
		padding-top:16upx;
	  border-bottom: 1px #eeeeee solid;
	}
  .time-wrapper{
    margin-left:30upx;
  }
  .selection{
    width: 33%;
    height: 80upx;
    line-height: 80upx;
    font-size: 28upx;
    margin-bottom: 80upx;
  }
  .selection > text{
    margin-left: 40upx;
  }

</style>
