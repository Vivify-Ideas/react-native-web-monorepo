import PropTypes from 'prop-types';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import $t from '../../../i18n';

const LeftSlider = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button onPress={navigation.closeDrawer} title="Close me" />
        <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
          <Text>{$t('profile.changePassword.changePassword')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <Text>{$t('profile.updateUser.updateProfile')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

LeftSlider.propTypes = {
  navigation: PropTypes.object
};

export default LeftSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
