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
      localStorage
		},
		LOGOUT(state) {
			state.userName = "";
			state.hasLogin = false;
		},
    SET_WEEK(state, week){
      state.week = week;
    },
    UPDATE_USER(state, user){
      state.user = user;
    }
	}
})

export default store
