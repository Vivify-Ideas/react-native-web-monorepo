import { Field, Formik } from 'formik';
import $t from 'i18n';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { updateProfileValidationRules } from 'validation/profile';

import { TextInputField } from '../shared/FormFields';

export const UpdateProfileForm = ({ user, onSubmit }) => (
  <Formik
    initialValues={{
      first_name: user.first_name,
      last_name: user.last_name
    }}
    onSubmit={onSubmit}
    validationSchema={updateProfileValidationRules}
  >
    {({ handleSubmit }) => (
      <View>
        <Field
          name="first_name"
          component={TextInputField}
          placeholder={$t('profile.updateUser.firstName')}
        />
        <Field
          name="last_name"
          component={TextInputField}
          placeholder={$t('profile.updateUser.lastName')}
        />
        <TouchableOpacity onPress={handleSubmit}>
          <Text>{$t('profile.updateUser.update')}</Text>
        </TouchableOpacity>
      </View>
    )}
  </Formik>
);

UpdateProfileForm.propTypes = {
  onSubmit: PropTypes.func,
  user: PropTypes.object
};
