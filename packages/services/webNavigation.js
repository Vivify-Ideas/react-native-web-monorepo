import Router from 'next/router';

export const NavigationActions = {
  navigate: ({ routeName, params }) =>
    Router.push(routeWithParams(routeName, params)),
  back: () => Router.back(),
};

const routeWithParams = (route, params) => {
  if (!params) {
    return MOBILE_ROUTES_TO_WEB[route];
  }

  var queryString = Object.keys(params)
    .map(function (key) {
      return key + '=' + params[key];
    })
    .join('&');

  return `${MOBILE_ROUTES_TO_WEB[route]}/${queryString}`;
};

const MOBILE_ROUTES_TO_WEB = {
  AuthLoading: '/',
  SignIn: '/sign-in',
  SignUp: '/sign-up',
  //...
};
