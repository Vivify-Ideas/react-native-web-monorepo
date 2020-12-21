import ActivityIndicatorComponent from 'components/shared/ActivityIndicatorComponent';
import ErrorModal from 'components/shared/modal/ErrorModal';
import PasswordChangedModal from 'components/shared/modal/PasswordChangeModal';
import SocialLoginErrorModal from 'components/shared/modal/SocialLoginErrorModal';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { withInAppNotification } from 'react-native-in-app-notification';
import { useDispatch, useSelector } from 'react-redux';
import { setGlobalError, setSocialLoginError } from 'store/actions/ErrorActions';
import { setChangePasswordSuccess } from 'store/actions/UserActions';
import { globalErrorSelector, socialLoginErrorSelector } from 'store/selectors/ErrorSelector';
import { loaderSelector } from 'store/selectors/LoaderSelector';
import { passwordChangedSelector } from 'store/selectors/UserSelector';

const NetworkInterceptor = ({ children }) => {
  const dispatch = useDispatch();

  const handleSetGlobalError = data => dispatch(setGlobalError(data));
  const handleSetSocialLoginError = data => dispatch(setSocialLoginError(data));
  const handleSetChangePasswordSuccess = data => dispatch(setChangePasswordSuccess(data));

  const loader = useSelector(loaderSelector());
  const passwordChanged = useSelector(passwordChangedSelector());
  const globalError = useSelector(globalErrorSelector());
  const socialLoginError = useSelector(socialLoginErrorSelector());

  return (
    <View style={styles.container}>
      {children}
      {loader && <ActivityIndicatorComponent animating />}
      <PasswordChangedModal
        isVisible={passwordChanged}
        closeModal={() => handleSetChangePasswordSuccess(false)}
      />
      <ErrorModal isVisible={globalError} closeModal={() => handleSetGlobalError(false)} />
      <SocialLoginErrorModal
        error={socialLoginError}
        closeModal={() => handleSetSocialLoginError('')}
      />
    </View>
  );
};

NetworkInterceptor.propTypes = {
  children: PropTypes.any,
  showNotification: PropTypes.func
};

export default withInAppNotification(NetworkInterceptor);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});
