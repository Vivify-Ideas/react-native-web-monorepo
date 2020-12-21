import defaultAvatar from 'assets/images/robot-dev.png';
import { UpdateProfileForm } from 'components/profile/UpdateProfileForm';
import Picture from 'components/shared/Picture';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from 'store/actions/UserActions';
import { userSelector } from 'store/selectors/UserSelector';

const EditProfile = () => {
  const dispatch = useDispatch();

  const handleUserUpdate = data => dispatch(updateUser(data));
  const user = useSelector(userSelector());

  const [image] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        {image !== '' || user.avatar !== null ? (
          <Picture source={image} uri={user.avatar} />
        ) : (
          <Picture source={defaultAvatar} />
        )}
      </TouchableOpacity>
      <KeyboardAwareScrollView enableOnAndroid>
        <UpdateProfileForm onSubmit={handleUserUpdate} user={user} />
      </KeyboardAwareScrollView>
    </View>
  );
};

EditProfile.propTypes = {
  navigation: PropTypes.object
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});
