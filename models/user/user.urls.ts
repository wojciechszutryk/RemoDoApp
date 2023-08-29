export const USER_PARAM = "user";

export const URL_USER = (userId?: string) => `/${userId || ":" + USER_PARAM}`;

export const URL_USERS = `/users`;

export const URL_REGISTER = `/register`;
export const URL_LOGIN = `/login`;
export const URL_LOGOUT = `/logout`;

export const URL_GOOGLE = `/google`;
export const URL_REDIRECT = `/redirect`;

export const URL_WITH_TOKEN = `/withToken`;
export const URL_PASSWORD = `/password`;
export const URL_PUBLIC_DATA = `/publicData`;
export const URL_AVATAR = `/avatar`;
