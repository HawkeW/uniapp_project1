<script>
  import { mapMutations } from 'vuex';
  export default {
    onLaunch: function() {
      uni.getStorage({ //获得保存在本地的用户信息  
        key: 'user',
        success: (res) => {
          this.LOGIN(res.data);
        }
      });
    },
    onShow: function() {

    },
    onHide: function() {

    },
    methods: {
      ...mapMutations(['LOGIN']) 
    }
  }
</script>

<style>
  /*每个页面公共css */
</style>
