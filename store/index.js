import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		forcedLogin: true,
		hasLogin: false,
		user:{
      userId:0,
      groupId:0,
      groupName:'11',
      status:1,
      userName:'11',
    },
    week:229
	},
	mutations: {
		LOGIN(state, user) {
			state.user = user;
			state.hasLogin = true;
      uni.setStorage({
          key: 'user',
          data: user,
          success: function () {
              console.log('userLogin success');
          }
      });
		},
		LOGOUT(state) {
			state.userName = "";
			state.hasLogin = false;
      uni.clearStorage();
		},
    SET_WEEK(state, week){
      state.week = week;
      uni.setStorage({
          key: 'week',
          data: week,
          success: function () {
              console.log('week success');
          }
      });
    },
    UPDATE_USER(state, user){
      state.user = user;
      uni.setStorage({
          key: 'user',
          data: user,
          success: function () {
              console.log('userUpdate success');
          }
      });
    }
	}
})

export default store
