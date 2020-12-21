import { all, takeLatest } from 'redux-saga/effects';

import {
  FORGOT_PASSWORD,
  PASSWORD_CHANGE,
  RESET_PASSWORD,
  USER_FACEBOOK_LOGIN,
  USER_GET,
  USER_GOOGLE_LOGIN,
  USER_LOGIN,
  USER_LOGOUT,
  USER_SIGN_UP,
  USER_UPDATE
} from '../actionTypes/UserActionTypes';
import {
  forgotPassword,
  passwordChange,
  resetPassword,
  updateUser,
  userFacebookLogin,
  userGet,
  userGoogleLogin,
  userLogin,
  userLogout,
  userSignUp
} from '../sagas/ActiveUserSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(USER_LOGIN, userLogin),
    takeLatest(USER_SIGN_UP, userSignUp),
    takeLatest(USER_LOGOUT, userLogout),
    takeLatest(USER_FACEBOOK_LOGIN, userFacebookLogin),
    takeLatest(USER_GOOGLE_LOGIN, userGoogleLogin),
    takeLatest(FORGOT_PASSWORD, forgotPassword),
    takeLatest(RESET_PASSWORD, resetPassword),
    takeLatest(USER_GET, userGet),
    takeLatest(PASSWORD_CHANGE, passwordChange),
    takeLatest(USER_UPDATE, updateUser)
  ]);
}
