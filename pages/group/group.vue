<template>
  <view>
    <view class="group-title">请选择分组</view>
    <view class="group-list">
      <radio-group @change="radioChange">
        <view class="">
          <label class="group flex" v-for="(item, index) in groups" :key="item.id">
            <view class="radio-btn">
              <radio :value="item.id.toString()" :checked="index === current" />
            </view>
            <view class="radio-name">{{item.groupName}}</view>
          </label>
        </view>
      </radio-group>
    </view>
    <view class=""><button @click="submit" type="primary">提交</button></view>
  </view>
</template>

<script>
  import { getGroupsInfo,saveGroup } from '../../api'
  import { mapState, mapMutations } from 'vuex'
  export default {
    computed:{
      ...mapState(['user']),
      params(){
        return { userId:this.user.userId, groupId:this.user.groupId };
      }
    },
    data() {
      return {
        current: '',
        groups: []
      }
    },
    onLoad() {
      getGroupsInfo().then(res=>{
        this.groups = res[1].data.groups;
      })
    },
    methods: {
      ...mapMutations({
        updateUser:'UPDATE_USER'
      }),
      //获取选择的分组id
      radioChange: function(evt) {
        for (let i = 0; i < this.groups.length; i++) {
          if (this.groups[i].id.toString() === evt.target.value) {
            this.user.groupId = this.groups[i].id;//更改user的groupId值
            break;
          }
        }
      },
      submit(){
        //提交更新用户信息(分组)
        this.updateUser(this.user);
        //请求，加入分组
        saveGroup(this.params).then(res=>{
          setTimeout(()=>{
            if(res[1].data.infoCode === 500){
              return 
            }else{
              uni.reLaunch({
                 url: '/pages/main/main'
               })
            }
          }, 2000);
          uni.showToast({
            icon:'none',
            title:res[1].data.infoText
          })
        })

      }
    }
  }
</script>

<style>
  .group-title {
    margin: 100upx 0 0 0;
    text-align: center;
    font-size:48upx;
    font-weight:bold;
  }

  .group-list {
    margin: 40upx auto;
    width: 700upx;
    text-align: center;
  }
  .group {
    margin-left: 50upx;
    height: 112upx;
    line-height: 112upx;
    font-size: 34upx;
    width: 100%;
  }
  .radio-name{
    margin-left: 26upx;
    text-align: left;
    width: 540upx;
    border-bottom: 1px #eeeeee solid;
  }
</style>
