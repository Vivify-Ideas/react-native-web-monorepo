import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const MonoText = props => <Text {...props} style={[props.style, styles.text]} />;

MonoText.propTypes = {
  style: PropTypes.object
};

export default MonoText;
const styles = StyleSheet.create({
  text: {
    fontFamily: 'space-mono'
  }
});
