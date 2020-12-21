import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

const ModalHeader = ({ children }) => {
  return <View>{children}</View>;
};

export default ModalHeader;

ModalHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ])
};
