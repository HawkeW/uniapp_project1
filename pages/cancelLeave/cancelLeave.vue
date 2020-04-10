<template>
	<view>
		<button type="default" @click="cancelLeave">cancelLeave</button>
	</view>
</template>

<script>
  import { mapState,mapMutations } from 'vuex';
	export default {
    computed:{
      ...mapState(['user','week'])
    },
		data() {
			return {
				
			}
		},
		methods: {
			...mapMutations(['updateUser','setWeek']),
      cancelLeave(){
        let uid = this.user.userId;
        uni.request({
          url: 'http://wuancake.supersuperz.top/cancelLeave',
          method: 'POST',
          data: {userId:uid},
          success: (res) => {
            if (res.data.infoCode === 500) {
              uni.showToast({
                icon: 'none',
                title: res.data.infoText
              });
            } else {
              setTimeout(() => {
                uni.reLaunch({ url: '/pages/index/index' });
              }, 1000);
              uni.showToast({
                icon: 'none',
                title: res.data.infoText
              });
            }
          },
          fail:(err)=>{
            uni.showModal({
              showCancel:false,
              content:err.errMsg
            })
          }
        })
      }
		},
    onLoad: () => {
      uni.getStorage({
        key:'user',
        success: (res) => {
          this.updateUser(res.data);
        }
      });
      uni.getStorage({
        key:'week',
        success: (res) => {
          this.setWeek(res.data);
        }
      });
    }
	}
</script>

<style>

</style>
