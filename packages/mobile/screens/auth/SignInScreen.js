import { SignInForm } from 'components/auth/SignInForm';
import $t from 'i18n';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import { facebookLogin, googleLogin } from 'store/actions/UserActions';
import Logo from '../../../assets/images/vi-logo.svg';

const SignInScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleFacebookLogin = (data) => dispatch(facebookLogin(data));
  const handleGoogleLogin = (data) => dispatch(googleLogin(data));

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const goToForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView enableOnAndroid>
        <SignInForm />

        <Logo width={20} height={20} fill="#ff2f2f"></Logo>
        <Button title="Sign in with Facebook!" onPress={handleFacebookLogin} />
        <Button title="Sign in with Google!" onPress={handleGoogleLogin} />
        <Button title="Sign up!" onPress={goToSignUp} />
        <Button title="Forgot password" onPress={goToForgotPassword} />
      </KeyboardAwareScrollView>
    </View>
  );
};

SignInScreen.propTypes = {
  navigation: PropTypes.object,
};

SignInScreen.navigationOptions = {
  title: $t('auth.signIn'),
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
