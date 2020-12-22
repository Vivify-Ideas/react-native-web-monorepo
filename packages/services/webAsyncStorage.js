import Cookies from 'js-cookie';

export default {
  getItem: (key) => Cookies.get(key),
  setItem: (key, value) => Cookies.set(key, value),
  removeItem: (key) => Cookies.remove(key),
};
