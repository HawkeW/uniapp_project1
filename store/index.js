import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		forcedLogin: true,
		hasLogin: true,
		user:{ },
    week:229
	},
	mutations: {
		LOGIN(state, user) {
			state.user = user;
			state.hasLogin = true;
      uni.setStorage({
          key: 'user',
          data: user
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
          data: week
      });
    },
    UPDATE_USER(state, user){
      state.user = user;
      uni.setStorage({
          key: 'user',
          data: user
      });
    },
	}
})

export default store
