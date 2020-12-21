import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

const ModalBody = ({ children }) => {
  return <View>{children}</View>;
};

export default ModalBody;

ModalBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ])
};
