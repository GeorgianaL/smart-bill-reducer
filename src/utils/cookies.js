export const getCookie = (name) => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) {
    return match[2];
  }
};

export const setCookie = (token) => {
  document.cookie = `token=${token}`;
};
