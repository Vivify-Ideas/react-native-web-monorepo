import { Field, Formik } from 'formik';
import $t from 'i18n';
import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setSignUpErrors } from 'store/actions/ErrorActions';
import { signUp } from 'store/actions/UserActions';
import { signUpErrorsSelector } from 'store/selectors/ErrorSelector';
import { signUpValidationRules } from 'validation/auth';

import { TextInputField } from '../shared/FormFields';
import ErrorText from '../shared/Text/ErrorText';

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleSignUp = data => dispatch(signUp(data));
  const handleSetSignUpErrors = data => dispatch(setSignUpErrors(data));

  const signUpErrors = useSelector(signUpErrorsSelector());

  useEffect(() => {
    return () => handleSetSignUpErrors({});
  }, []);

  return (
    <Formik
      initialValues={{
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: ''
      }}
      onSubmit={handleSignUp}
      validationSchema={signUpValidationRules}
    >
      {({ handleSubmit }) => (
        <View>
          <Field
            name="first_name"
            component={TextInputField}
            placeholder={$t('auth.enterFirstName')}
          />
          <Field
            name="last_name"
            component={TextInputField}
            placeholder={$t('auth.enterLastName')}
          />
          <Field name="email" component={TextInputField} placeholder={$t('auth.enterEmail')} />
          <ErrorText error={!!signUpErrors.email} message={signUpErrors.email} />
          <Field
            name="password"
            component={TextInputField}
            secureTextEntry
            placeholder={$t('auth.enterPassword')}
          />
          <Field
            name="confirm_password"
            component={TextInputField}
            secureTextEntry
            placeholder={$t('auth.confirmPassword')}
          />
          <TouchableOpacity onPress={handleSubmit}>
            <Text>{$t('auth.signUp')}</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

SignUpForm.propTypes = {};
