const BASE_URL_CHANGMIN = 'http://10.58.1.226:8000';

const API = {
  signin: `${BASE_URL_CHANGMIN}/users/signin`,
  signup: `${BASE_URL_CHANGMIN}/users/signup`,
  signUsername: `${BASE_URL_CHANGMIN}/users/username`,
  signEmail: `${BASE_URL_CHANGMIN}/users/email`,
  product: `${BASE_URL_CHANGMIN}/product`,
  cart: `${BASE_URL_CHANGMIN}/cart`,
  orders: `${BASE_URL_CHANGMIN}/orders`,
};

export default API;
