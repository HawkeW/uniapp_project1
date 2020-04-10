export function test () {
   ({
    url: '/',
    method: 'get'
  })
}

export function queryRegist(params) { 
  return uni.request({
    url: 'http://wuancake.supersuperz.top/regist',
    method: 'post',
    data: params,
  })
}
//登录，返回值user_id，group_id等
export function queryLogin(params) {
  return uni.request({
    url: 'http://wuancake.supersuperz.top/login',
    method: 'POST',
    data: params
  })
}
// 获取所有分组
export function getGroupsInfo() {
  return uni.request({
    url:'http://wuancake.supersuperz.top/findAllGroupInfo',
    method:'GET'
  })
}

// 获取周报提交状态
export function getWeeklyStatus(uid) { 
  const data = {
    userId: uid
  }
  return uni.request({
    url: 'http://wuancake.supersuperz.top/main',
    method: 'POST',
    data: data
  })
}
// 申请请假
export function askLeave(params) { 
  const data = params
  return uni.request({
    url: 'http://wuancake.supersuperz.top/leave',
    method: 'POST',
    data: data
  })
}
// 保存分组信息
export function saveGroup(params) { 
  const data = params
  return uni.request({
    url: 'http://wuancake.supersuperz.top/group',
    method: 'post',
    data: data
  })
}
// 提交周报
export function submitWeekly(params) { 
  const data = params
  return uni.request({
    url: 'http://wuancake.supersuperz.top/submit',
    method: 'post',
    data: data
  })
}
