const BASE_URL_SEYONG = 'http://10.58.3.112:8000';
const BASE_URL_JONGHO = 'http://10.58.7.146:8000';
const BASE_URL_CHANGMIN = 'http://10.58.3.112:8000';

const API = {
  signin: `${BASE_URL_SEYONG}/users/signin`,
  signup: `${BASE_URL_SEYONG}/users/signup`,
  signUsername: `${BASE_URL_SEYONG}/users/username`,
  signEmail: `${BASE_URL_SEYONG}/users/email`,
  products: `${BASE_URL_CHANGMIN}/products`,
  product: `${BASE_URL_JONGHO}/product`,
  cart: `${BASE_URL_SEYONG}/cart`,
  orders: `${BASE_URL_JONGHO}/orders`,
};

export default API;
