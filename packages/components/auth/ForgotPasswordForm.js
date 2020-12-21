import { Field, Formik } from 'formik';
import $t from 'i18n';
import React, { useCallback, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setForgotPasswordError } from 'store/actions/ErrorActions';
import { passwordForgot } from 'store/actions/UserActions';
import { forgotPasswordErrorSelector } from 'store/selectors/ErrorSelector';
import { forgotPasswordValidationRules } from 'validation/auth';

import { TextInputField } from '../shared/FormFields';
import ErrorText from '../shared/Text/ErrorText';

export const ForgotPasswordForm = () => {
  const dispatch = useDispatch();

  const handlePasswordForgot = useCallback(data => dispatch(passwordForgot(data)));
  const handleSetForgotPasswordError = data => dispatch(setForgotPasswordError(data));

  const forgotPasswordError = useSelector(forgotPasswordErrorSelector());

  useEffect(() => {
    return () => handleSetForgotPasswordError(false);
  }, []);

  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={handlePasswordForgot}
      validationSchema={forgotPasswordValidationRules}
    >
      {({ handleSubmit }) => (
        <View>
          <Field name="email" component={TextInputField} placeholder={$t('auth.enterEmail')} />
          <ErrorText error={!!forgotPasswordError} message={$t('auth.emailDoesNotExist')} />
          <TouchableOpacity onPress={handleSubmit}>
            <Text>{$t('auth.sendEmail')}</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

ForgotPasswordForm.propTypes = {};
