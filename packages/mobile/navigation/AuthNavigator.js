import { createStackNavigator } from 'react-navigation-stack';

import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import ForgotPasswordSuccess from '../screens/auth/ForgotPasswordSuccess';
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';
import ResetPasswordSuccess from '../screens/auth/ResetPasswordSuccess';
import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';

export default createStackNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
  ForgotPassword: ForgotPasswordScreen,
  ForgotPasswordSuccess,
  ResetPassword: ResetPasswordScreen,
  ResetPasswordSuccess
});
