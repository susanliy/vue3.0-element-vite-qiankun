// 阿里验证码
interface Acs {
  sessionid: string;
  token: string;
  sig: string;
  scene: string;
}
// 登录参数
export interface LoginParams {
  username?: string;
  password?: string;
  platform: number;
  acs: Acs;
  verification?: string;
  mobile?: string;
}
