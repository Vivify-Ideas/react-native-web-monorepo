import { Field, Formik } from 'formik';
import $t from 'i18n';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { passwordReset } from 'store/actions/UserActions';
import { resetPasswordErrorSelector } from 'store/selectors/ErrorSelector';
import { resetPasswordValidationRules } from 'validation/auth';

import { TextInputField } from '../shared/FormFields';
import ErrorText from '../shared/Text/ErrorText';

export const ResetPasswordForm = ({ token }) => {
  const dispatch = useDispatch();

  const handlePasswordReset = data => dispatch(passwordReset(data));
  const resetPasswordError = useSelector(resetPasswordErrorSelector());

  const handleSubmit = resetPasswordData => {
    handlePasswordReset({
      ...resetPasswordData,
      token
    });
  };

  return (
    <Formik
      initialValues={{ password: '', password_confirmation: '' }}
      onSubmit={handleSubmit}
      validationSchema={resetPasswordValidationRules}
    >
      {({ handleSubmit }) => (
        <View>
          <Field
            name="password"
            component={TextInputField}
            secureTextEntry
            placeholder={$t('auth.enterPassword')}
          />
          <Field
            name="password_confirmation"
            component={TextInputField}
            secureTextEntry
            placeholder={$t('auth.confirmPassword')}
          />
          <ErrorText error={!!resetPasswordError} message={$t('auth.invalidToken')} />
          <TouchableOpacity onPress={handleSubmit}>
            <Text>{$t('auth.resetPassword')}</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

ResetPasswordForm.propTypes = {
  token: PropTypes.string
};
