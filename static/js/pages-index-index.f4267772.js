(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{1671:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* @import url("@/common/uni.css"); */\nuni-text[data-v-910b1afc]{font-weight:600}\n.main[data-v-910b1afc]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.text-center[data-v-910b1afc]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.current-week[data-v-910b1afc]{font-weight:700;font-family:PingFang;margin-top:%?96?%;font-size:26px;line-height:37px;height:37px;padding-top:0}.ask-leave[data-v-910b1afc]{color:#016ee0}.status-user[data-v-910b1afc]{margin-top:%?34?%}.wrapper[data-v-910b1afc]{margin-top:%?96?%;margin-bottom:%?140?%}.user-info[data-v-910b1afc]{\r\n  /* margin: 12upx; */font-size:14px;font-family:PingFang;font-weight:500;opacity:1}.btn-block[data-v-910b1afc]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:14px}.uni-btn[data-v-910b1afc]{width:%?406?%;-webkit-border-radius:0;border-radius:0}\r\n\r\n\r\n\r\n',""]),t.exports=e},1963:function(t,e,n){"use strict";n.r(e);var r=n("5f9a"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},"1b17":function(t,e,n){"use strict";function r(){}function a(t){return uni.request({url:"http://wuancake.supersuperz.top/regist",method:"post",data:t})}function i(t){return uni.request({url:"http://wuancake.supersuperz.top/login",method:"POST",data:t})}function u(){return uni.request({url:"http://wuancake.supersuperz.top/findAllGroupInfo",method:"GET"})}function s(t){var e={userId:t};return uni.request({url:"http://wuancake.supersuperz.top/main",method:"POST",data:e})}function o(t){var e=t;return uni.request({url:"http://wuancake.supersuperz.top/leave",method:"POST",data:e})}function c(t){var e=t;return uni.request({url:"http://wuancake.supersuperz.top/group",method:"post",data:e})}function f(t){var e=t;return uni.request({url:"http://wuancake.supersuperz.top/submit",method:"post",data:e})}Object.defineProperty(e,"__esModule",{value:!0}),e.test=r,e.queryRegist=a,e.queryLogin=i,e.getGroupsInfo=u,e.getWeeklyStatus=s,e.askLeave=o,e.saveGroup=c,e.submitWeekly=f},"3c0b":function(t,e,n){"use strict";var r=n("4605"),a=n.n(r);a.a},"3d32":function(t,e,n){"use strict";n.r(e);var r=n("a7a3"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},4605:function(t,e,n){var r=n("1671");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("71db2500",r,!0,{sourceMap:!1,shadowMode:!1})},"554a":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".status-info[data-v-40db50ca]{position:relative}.text-center[data-v-40db50ca]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.left-text[data-v-40db50ca]{height:%?56?%;font-size:18px;font-family:PingFang;font-weight:600;line-height:%?56?%;opacity:1}.left-detail[data-v-40db50ca]{\r\n  /* width: 558upx; */margin-top:%?24?%;line-height:%?64?%;font-size:26px;font-weight:700;text-align:center}.num[data-v-40db50ca]{\r\n  /* width: 558upx; */margin-top:%?24?%;line-height:%?64?%;font-size:26px;font-weight:700;text-align:center}",""]),t.exports=e},"5f9a":function(t,e,n){"use strict";var r=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("f3f3")),i=(n("1b17"),n("2f62")),u=r(n("caed")),s={computed:(0,a.default)({},(0,i.mapState)(["user","week"])),data:function(){return{isReady:!1,weekNum:""}},methods:(0,a.default)({},(0,i.mapMutations)(["login","updateUser","setWeek","logout"]),{requestStatus:function(t){var e=this;uni.request({url:"https://wuancake.supersuperz.top/main",method:"POST",data:{userId:t},success:function(t){if(500===t.data.infoCode)return uni.showToast({icon:"none",title:t.data.infoText}),void e.failedLogin();try{e.weekNum=t.data.weekNum;var n=e.user;n.status=t.data.status,e.updateUser(n),e.setWeek(t.data.weekNum),e.isReady=!0}catch(r){e.failedLogin()}}})},failedLogin:function(){uni.navigateTo({url:"/pages/login/login"})},toLogout:function(){this.logout(),uni.reLaunch({url:"/pages/login/login"})}}),components:{weeklyStatus:u.default},onLoad:function(){uni.startPullDownRefresh()},onPullDownRefresh:function(){var t=this;uni.getStorage({key:"user",success:function(e){e.data.userId?t.requestStatus(e.data.userId):t.failedLogin()}}),setTimeout((function(){uni.stopPullDownRefresh()}),1e3)}};e.default=s},"635b":function(t,e,n){var r=n("554a");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("1a8fe8da",r,!0,{sourceMap:!1,shadowMode:!1})},a7a3:function(t,e,n){"use strict";var r=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("de33")),i={name:"weekly-status",computed:{},props:["status"],created:function(){this.getLeftTime()},data:function(){return{leftTime:{left_days:0,left_hours:0,left_minutes:0,left_seconds:0}}},methods:{getLeftTime:function(){var t=this;this.leftTime=(0,a.default)(),setInterval((function(){t.leftTime=(0,a.default)()}),1e3)}}};e.default=i},c298:function(t,e,n){"use strict";n.r(e);var r=n("d140"),a=n("1963");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("3c0b");var u,s=n("f0c5"),o=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"910b1afc",null,!1,r["a"],u);e["default"]=o.exports},caed:function(t,e,n){"use strict";n.r(e);var r=n("dc64"),a=n("3d32");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("f238");var u,s=n("f0c5"),o=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"40db50ca",null,!1,r["a"],u);e["default"]=o.exports},d140:function(t,e,n){"use strict";var r,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"main"},[t.isReady?n("v-uni-view",{staticStyle:{transition:"ease","transition-duration":"2s","transition-delay":"inherit"}},[n("v-uni-view",{staticClass:"text-center"},[n("v-uni-text",{staticClass:"current-week"},[t._v("第"+t._s(t.weekNum)+"周")])],1),n("v-uni-view",{staticClass:"status-user"},[n("v-uni-view",{staticClass:"user-info text-center"},[n("v-uni-text",{staticClass:"user-info"},[t._v(t._s(t.user.groupName)+" "+t._s(t.user.userName))])],1)],1),n("v-uni-view",{staticClass:"wrapper"},[n("weekly-status",{staticClass:"status",attrs:{status:t.user.status}})],1),1===t.user.status?n("v-uni-view",[n("v-uni-navigator",{attrs:{url:"/pages/submit/submit"}},[n("v-uni-button",{staticClass:"uni-btn primary",attrs:{type:"primary"}},[t._v("提交周报")])],1),n("v-uni-navigator",{staticClass:"btn-block",attrs:{url:"/pages/leave/leave"}},[n("v-uni-button",{staticClass:"uni-btn default",staticStyle:{color:"#016EE0","border-color":"#016EE0"},attrs:{type:"primary",plain:"true"}},[t._v("我要请假")])],1)],1):t._e()],1):t._e()],1)},i=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}))},dc64:function(t,e,n){"use strict";var r,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"status-info"},[n("v-uni-view",{staticClass:"left-time"},[n("v-uni-view",{staticClass:"left-text "},[n("v-uni-view",{staticClass:"text-center"},[1===t.status?n("v-uni-text",[t._v("本周剩余时间")]):n("v-uni-text",[t._v("本周周报")])],1)],1),1===t.status?n("v-uni-view",{staticClass:"left-detail"},[n("v-uni-text",{staticClass:"num"},[t._v(t._s(t.leftTime.left_days)+"天 "+t._s(t.leftTime.left_hours)+" : "+t._s(t.leftTime.left_minutes)+" : "+t._s(t.leftTime.left_seconds))])],1):t._e(),n("v-uni-view",{staticClass:"left-detail"},[2===t.status?n("v-uni-text",{staticClass:"num"},[t._v("已提交")]):t._e(),3===t.status?n("v-uni-text",{staticClass:"num"},[t._v("已请假")]):t._e()],1)],1)],1)},i=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}))},de33:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(){var t=new Date,e=t.getDay(),n=t.getHours(),r=t.getMinutes(),a=t.getSeconds(),i={left_days:e>0?7-e:e,left_hours:n>=0?23-n:n,left_minutes:r>0?59-r:59==a?r-1:r,left_seconds:a>0?59-a:0==a?59:a};return i};e.default=r},f238:function(t,e,n){"use strict";var r=n("635b"),a=n.n(r);a.a}}]);