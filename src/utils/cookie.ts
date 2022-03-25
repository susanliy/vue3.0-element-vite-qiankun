import Cookies from 'js-cookie';
export const setCookie = (key: string, value: any) => {
  return Cookies.set(key, value);
};

export const getCookie = (key: string) => {
  return Cookies.get(key);
};

//todo  带上cookie的domain 属性？
export const removeCookie = (key: string) => {
  // Cookies.remove(key, { domain: import.meta.env.VITE_TOP_DOMAIN });
  Cookies.remove(key);
};
