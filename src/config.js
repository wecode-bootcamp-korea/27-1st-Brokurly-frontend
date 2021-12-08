const BASE_URL_SEYONG = 'http://';
const BASE_URL_JONGHO = 'http://10.58.7.146:8000';
const BASE_URL_CHANGMIN = 'http://10.58.3.112:8000';

const API = {
  signin: `${BASE_URL_CHANGMIN}/users/signin`,
  signup: `${BASE_URL_CHANGMIN}/users/signup`,
  signUsername: `${BASE_URL_CHANGMIN}/users/username`,
  signEmail: `${BASE_URL_CHANGMIN}/users/email`,
  product: `${BASE_URL_CHANGMIN}/product`,
  // product: `${BASE_URL_JONGHO}/product`,
  cart: `${BASE_URL_CHANGMIN}/cart`,
  orders: `${BASE_URL_CHANGMIN}/orders`,
};

export default API;
