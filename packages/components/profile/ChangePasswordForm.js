import { Field, Formik } from 'formik';
import $t from 'i18n';
import React, { useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from 'store/actions/UserActions';
import { changePasswordErrorSelector } from 'store/selectors/ErrorSelector';

import { changePasswordValidationRules } from '../../validation/profile';
import { TextInputField } from '../shared/FormFields';
import ErrorText from '../shared/Text/ErrorText';

export const ChangePasswordForm = () => {
  const dispatch = useDispatch();

  const handleChangePassword = useCallback(data => dispatch(changePassword(data)));

  const invalidOldPasswordError = useSelector(changePasswordErrorSelector());
  return (
    <Formik
      initialValues={{
        current_password: '',
        new_password: '',
        new_password_confirmation: ''
      }}
      onSubmit={handleChangePassword}
      validationSchema={changePasswordValidationRules}
    >
      {({ handleSubmit }) => (
        <View>
          <Field
            name="current_password"
            component={TextInputField}
            secureTextEntry
            placeholder={$t('profile.changePassword.currentPassword')}
          />
          <ErrorText
            error={!!invalidOldPasswordError}
            message={$t('profile.changePassword.invalidOldPassword')}
          />
          <Field
            name="new_password"
            component={TextInputField}
            secureTextEntry
            placeholder={$t('profile.changePassword.newPassword')}
          />
          <Field
            name="new_password_confirmation"
            component={TextInputField}
            secureTextEntry
            placeholder={$t('profile.changePassword.confirmNewPassword')}
          />
          <TouchableOpacity onPress={handleSubmit}>
            <Text>{$t('profile.changePassword.change')}</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

ChangePasswordForm.propTypes = {};
