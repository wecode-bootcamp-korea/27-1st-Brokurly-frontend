const BASE_URL_SEYONG = 'http://';
const BASE_URL_JONGHO = 'http://';
const BASE_URL_CHANGMIN = 'http://';

const API = {
  signin: `${BASE_URL_SEYONG}/users/signin`,
  signup: `${BASE_URL_SEYONG}/users/signup`,
  signUsername: `${BASE_URL_SEYONG}/users/username`,
  signEmail: `${BASE_URL_SEYONG}/users/email`,
  products: `${BASE_URL_CHANGMIN}/products`,
  product: `${BASE_URL_JONGHO}/product`,
  cart: `${BASE_URL_SEYONG}/cart`,
  order: `${BASE_URL_JONGHO}/order`,
};

export default API;
