export const getCookie = (name) => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) {
    return match[2];
  }
};

export const hasCookie = (name) => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match !== null;
};

const d = new Date();
d.setTime(d.getTime() + 12 * 60 * 60 * 1000);
const expires = `expires=${d.toGMTString()}`;

export const setCookie = (name, value, expiration = expires) => {
  document.cookie = `${name}=${value}; ${expiration}`;
};

export const removeCookie = (name) => {
  document.cookie = `${name}=; Max-Age=-99999999;`;
};
