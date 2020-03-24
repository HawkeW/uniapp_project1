<script>
  import { mapMutations } from 'vuex';
  export default {
    onLaunch: function() {
      uni.getStorage({ 
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
