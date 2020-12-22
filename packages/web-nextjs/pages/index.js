import React from 'react';
import { View, Text } from 'react-native';
import withAuth from '../../utils/hoc/withAuth';

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default withAuth(App);
