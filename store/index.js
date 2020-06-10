import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    hasLogin: false, //考勤业务代码
    user: {
      userId: null,
      groupId: null,
      groupName:null,
      status: null,
      userName: null,
    },
    week: null
  },
  mutations: {
    //考勤登录逻辑
    login(state, user) {
      state.user = user;
      state.hasLogin = true;
			uni.setStorageSync( 'user',user)
    },
    logout(state) {
      uni.clearStorage();
      state.hasLogin = false;
    },
    setWeek(state, week) {
      state.week = week;
      uni.setStorageSync('week', week)
    },
    updateUser(state, user) {
      state.user = user;
			uni.setStorageSync( 'user',user)
    },
  }
})

export default store
