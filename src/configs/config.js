/*
 *自定义配置
 *
 */
module.exports = {
  baseURL: 'http://localhost:59200', // 后台接口地址
  Authorization: 'Authorization', // token名称

  /* 此部分如不需要请将 refreshToken FrontCheckToken 设置为false */
  refreshToken: true, // 是否自动刷新令牌
  refreshTokenTime: 5, // 过多久后自动获取新令牌
  refreshTokenUrl: '', // 刷新令牌接口地址
  FrontCheckToken: false, // 前端校验token,如果开启(true)，发送请求之前都会校验（只校验令牌是否过期），校验不通过直接跳回登录页
  FrontCheckIgnoreUrls: ['/api/Login/Login'] // 前端校验token需要忽略的请求地址,一般是登录接口
}
