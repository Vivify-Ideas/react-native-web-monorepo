import AsyncStorage from '@react-native-async-storage/async-storage';

import config from '../config';
import ApiService from './ApiService';

const { CLIENT_ID } = config;

const ENDPOINTS = {
  LOGIN: '/auth/login',
  SIGN_UP: '/auth/register',
  LOGOUT: '/auth/logout',
  FACEBOOK: '/auth/social/facebook',
  GOOGLE: '/auth/social/google',
  FORGOT_PASSWORD: '/user/forgot-password',
  RESET_PASSWORD: '/user/reset-password',
};

class AuthService extends ApiService {
  constructor() {
    super();
    this.init();
  }

  init = async () => {
    const token = this.getToken();
    const user = this.getUser();

    if (token && user) {
      await this.setAuthorizationHeader();
      this.api.setUnauthorizedCallback(this.destroySession.bind(this));
    }
  };

  setAuthorizationHeader = async () => {
    const token = await this.getToken();
    if (token) {
      this.api.attachHeaders({
        Authorization: `Bearer ${token}`,
      });
    }

    this.api.attachHeaders({
      clientId: CLIENT_ID,
    });
  };

  createSession = async (user) => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user.access_token));
      await this.setAuthorizationHeader();
    } catch (e) {
      console.log(e);
    }
  };

  destroySession = async () => {
    await AsyncStorage.removeItem('user');
    this.api.removeHeaders(['Authorization']);
  };

  login = async (loginData) => {
    const { data } = await this.apiClient.post(ENDPOINTS.LOGIN, loginData);
    await this.createSession(data);
    return data;
  };

  logout = async () => {
    try {
      const { data } = await this.apiClient.post(ENDPOINTS.LOGOUT);
      await this.destroySession();
      return { ok: true, data };
    } catch (e) {
      await this.destroySession();
      return { ok: true };
    }
  };

  forgotPassword = (data) =>
    this.apiClient.post(ENDPOINTS.FORGOT_PASSWORD, data);

  resetPassword = (data) => this.apiClient.post(ENDPOINTS.RESET_PASSWORD, data);

  signup = async (signupData) => {
    await this.apiClient.post(ENDPOINTS.SIGN_UP, signupData);
    const { email, password } = signupData;
    return this.login({ email, password });
  };

  getToken = async () => {
    const user = await AsyncStorage.getItem('user');
    return user ? JSON.parse(user) : undefined;
  };

  getUser = async () => {
    const user = await AsyncStorage.getItem('user');
    return user ? JSON.parse(user) : undefined;
  };

  updateUserInStorage = async (property) => {
    const user = await AsyncStorage.getItem('user');
    let jsonUser = JSON.parse(user);
    jsonUser = { ...jsonUser, ...property };
    AsyncStorage.setItem('user', JSON.stringify(jsonUser));
  };
}

const authService = new AuthService();

export default authService;
