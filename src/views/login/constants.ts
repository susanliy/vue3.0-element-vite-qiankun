import { ELoginType } from '@/enums/businessEnum';
import { ref } from 'vue';
export const LOGIN_LIST = ref([
  {
    name: '微信登录',
    icon: 'nav_account',
    code: ELoginType.weChat,
    show: true,
  },
  {
    name: '手机号登录',
    icon: 'nav_account',
    code: ELoginType.number,
    show: false,
  },
  {
    name: '账号登录',
    icon: 'nav_account',
    code: ELoginType.phone,
    show: true,
  },
  {
    name: 'QQ登录',
    icon: 'nav_account',
    code: ELoginType.QQ,
    show: true,
  },
]);
