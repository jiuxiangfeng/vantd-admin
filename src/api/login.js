import request from '../utils/request'
/*
*登录
*payload :{
  "userAccount": "xxx",
  "userPwd": "xxx"
}
*/
export function Login(payload) {
  return request.httpPost('/api/Login/Login', payload)
}
