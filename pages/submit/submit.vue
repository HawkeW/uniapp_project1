<template>
  <view class="weekly">
    <view class="header">
      <view class="current-week">第{{ week }}周</view>
      <view class="user-info">{{ user.groupName }} :{{ user.userName }}</view>
    </view>
    <view class="content">
      <view class="input-area">
        <view class="weekly-title"> 本周完成（必填）</view>
         <input  v-model="weekly.complete" maxlength=-1 />
			</view>
			<view class="input-area">
				<view class="weekly-title">所遇问题（必填)</view>
				<input v-model="weekly.trouble"   maxlength=-1 />
			</view>
			<view class="input-area">
				<view class="weekly-title">下周计划（必填）</view>
				<input v-model="weekly.plane"  maxlength=-1 />
			</view>
			<view class="input-area">
				<view class="weekly-title">作品链接（GitHub、站酷等，选填）</view>
				<input  v-model="weekly.link"  maxlength=-1 />
			</view>
		</view>
		<view class="btn"><button @tap="submit" type="primary">提交</button></view>
	</view>
</template>

<script>
  import { mapState } from 'vuex'
  import { submitWeekly } from '../../api'
  
	export default {
    computed:{
      ...mapState(['user','week'])
    },
		data() {
			return {
				weekly:{
          userId: 0,
          groupId:0,
          complete:"",
          trouble:"",
          plane:"",
          url:"",
          date: ""
        }
			}
		},
		methods: {
			submit(){
        if(!this.checkFormat()){
          uni.showToast({
            icon:'none',
            title:'请填写全部必填项后提交'
          })
          return
        }
        let params = this.weekly;
        this.weekly.userId = this.user.userId;
        this.weekly.groupId = this.user.groupId;
        this.weekly.date = this.nowTime();
        
        submitWeekly(params).then(res=>{
          if(res[1].data.infoCode === 500){
            uni.showToast({
              icon:'none',
              title:res[1].data.infoText
            })
          }else{
            setTimeout(()=> {
              uni.reLaunch({
                url:'/pages/main/main'
              })
            }, 2000);
            uni.showToast({
              icon:'none',
              title:res[1].data.infoText
            })
          }
        })
      },
      nowTime(){
        let nowTime = new Date();
        return nowTime.getFullYear()+'-'+(nowTime.getMonth()+1)+'-'+(nowTime.getDate())+' '+(nowTime.getHours())+':'+nowTime.getMinutes()+':'+nowTime.getSeconds()
      },
      checkFormat(){
      return this.weekly.complete && this.weekly.trouble && this.weekly.plane;
    }
      
		}
	}
</script>

<style>
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
	height: 42upx;
  border-bottom: 1px #eeeeee solid;
}

.input-area >input{
  display: block;
	height: 60upx;
	line-height: 40upx;
	padding-top:16upx;
  border-bottom: 1px #eeeeee solid;
}
.btn{
	margin: 60upx;
}
</style>
