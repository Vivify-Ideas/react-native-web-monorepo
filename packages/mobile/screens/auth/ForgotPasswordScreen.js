import { ForgotPasswordForm } from 'components/auth/ForgotPasswordForm';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ForgotPasswordScreen = () => (
  <View style={styles.container}>
    <KeyboardAwareScrollView enableOnAndroid>
      <ForgotPasswordForm />
    </KeyboardAwareScrollView>
  </View>
);

ForgotPasswordScreen.navigationOptions = {
  title: 'Forgot Password'
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});
