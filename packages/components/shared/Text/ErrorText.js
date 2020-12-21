import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';

const ErrorText = props => {
  return <Text>{props.error ? props.message : ''}</Text>;
};

ErrorText.propTypes = {
  error: PropTypes.bool,
  message: PropTypes.string
};

export default ErrorText;
