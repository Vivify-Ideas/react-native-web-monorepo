import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, TextInput, View } from 'react-native';

export const TextInputField = ({ field, form, ...props }) => {
  return (
    <View>
      <TextInput
        value={field.value}
        onChangeText={form.handleChange(field.name)}
        onBlur={form.handleBlur(field.name)}
        {...props}
      />
      <ErrorMessage name={field.name} component={Text} />
    </View>
  );
};

TextInputField.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object
};
