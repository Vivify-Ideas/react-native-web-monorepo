import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

const ModalFooter = ({ children }) => {
  return <View>{children}</View>;
};

export default ModalFooter;

ModalFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ])
};
