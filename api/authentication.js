import client from './client';
import { LOGIN_USER_URL } from './apiEndPoint';

export const login = async (email, password) => {
  const response = await client.post(LOGIN_USER_URL, {
    email,
    password,
  });
  return response;
};
