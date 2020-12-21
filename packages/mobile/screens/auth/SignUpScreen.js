import { SignUpForm } from 'components/auth/SignUpForm';
import $t from 'i18n';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView enableOnAndroid>
        <SignUpForm />
      </KeyboardAwareScrollView>
    </View>
  );
};
SignUpScreen.navigationOptions = {
  title: $t('auth.signUp')
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});
