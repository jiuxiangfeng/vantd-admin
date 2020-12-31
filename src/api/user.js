import request from '../utils/request'

export function GetUserList(payload) {
  return request.httpPost('/api/SysUser/SearchPage', payload)
}
