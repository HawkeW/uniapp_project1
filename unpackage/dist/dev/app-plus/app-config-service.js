
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login","pages/index/index","pages/regist/regist","pages/submit/submit","pages/group/group","pages/leave/leave"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"午安考勤计划","navigationBarBackgroundColor":"#016EE0","backgroundColor":"#FFFFFF"},"renderer":"native","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"wuand","compilerVersion":"2.6.9","entryPagePath":"pages/login/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login","meta":{"isQuit":true,"isNVue":true},"window":{}},{"path":"/pages/index/index","meta":{"isNVue":true},"window":{"navigationBarTitleText":"首页"}},{"path":"/pages/regist/regist","meta":{"isNVue":true},"window":{"enablePullDownRefresh":true}},{"path":"/pages/submit/submit","meta":{"isNVue":true},"window":{}},{"path":"/pages/group/group","meta":{"isNVue":true},"window":{}},{"path":"/pages/leave/leave","meta":{"isNVue":true},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,window:void 0,global:void 0}}}});
