import { b64ToUtf8 } from './util'
import config from '../configs/config'
/*
 *判断token是否有效（没过期就是有效）
 */
export function TokenEffective() {
  const token = sessionStorage.getItem(config.Authorization)
  if (!token) {
    return false
  }
  const { exp } = JSON.parse(b64ToUtf8(token.split('.')[1]))
  if (!exp) {
    return false
  }
  if (new Date() - new Date(exp * 1000) > 0) {
    return false
  } else {
    return true
  }
}
/*
 *判断token是否已经经过多少分钟（token不存在或token解析异常都算过了5分钟）
 */
export function TokenTimeoutRefresh() {
  const token = sessionStorage.getItem(config.Authorization)
  if (!token) {
    return true
  }
  const { iat } = JSON.parse(b64ToUtf8(token.split('.')[1]))
  if (!iat) {
    return true
  }
  const minutes = (new Date() - new Date(iat * 1000)) / (1000 * 60)
  if (minutes > config.refreshTokenTime) {
    return true
  } else {
    return false
  }
}

/*
 *设置token
 */
export function SaveToken(token) {
  sessionStorage.setItem(config.Authorization, 'Bearer ' + token)
}

/*
 *获取token
 */
export function GetToken(token) {
  return sessionStorage.getItem(config.Authorization)
}

/*
 *清除token
 */
export function RemoveToken() {
  return sessionStorage.removeItem(config.Authorization)
}
