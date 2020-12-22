import { createSelector } from 'reselect';

const userStateSelector = (state) => state.userReducer;

export const userTokenSelector = () =>
  createSelector(userStateSelector, (user) => user.userToken);

export const makeSelectUserAuthStatus = () =>
  createSelector(userStateSelector, (user) => !!user.user.id);

export const userSelector = () =>
  createSelector(userStateSelector, (user) => user.user);

export const passwordChangedSelector = () =>
  createSelector(userStateSelector, (user) => user.passwordChanged);
