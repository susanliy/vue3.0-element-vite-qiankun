import $axios from 'axios';
import { DataWrapper } from '@/service/dataType/base';
import { Init } from '@/service/dataType/main';

/**
 * 初始化参数
 * @returns
 */
export const getInit = () => $axios.get<DataWrapper<Init>>('/bsapi/main/auth/init');
