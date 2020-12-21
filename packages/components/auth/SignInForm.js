import { Field, Formik } from 'formik';
import $t from 'i18n';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'store/actions/UserActions';
import { signInErrorSelector } from 'store/selectors/ErrorSelector';
import { signInValidationRules } from 'validation/auth';

import { TextInputField } from '../shared/FormFields';
import ErrorText from '../shared/Text/ErrorText';

export const SignInForm = () => {
  const dispatch = useDispatch();

  const handleSignIn = data => dispatch(login(data));

  const signInError = useSelector(signInErrorSelector());

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSignIn}
      validationSchema={signInValidationRules}
    >
      {({ handleSubmit }) => (
        <View>
          <Field name="email" component={TextInputField} placeholder={$t('auth.enterEmail')} />
          <Field
            name="password"
            component={TextInputField}
            secureTextEntry
            placeholder={$t('auth.enterPassword')}
          />
          <ErrorText error={!!signInError} message={$t('auth.invalidCredentials')} />
          <TouchableOpacity onPress={handleSubmit}>
            <Text>{$t('auth.signIn')}</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

SignInForm.propTypes = {};
