import $t from 'i18n';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ForgotPasswordSuccess = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView enableOnAndroid>
        <Text>{$t('auth.forgotPasswordSuccess')}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text>{$t('common.ok')}</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};

ForgotPasswordSuccess.propTypes = {
  navigation: PropTypes.object
};

ForgotPasswordSuccess.navigationOptions = null;

export default ForgotPasswordSuccess;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});
