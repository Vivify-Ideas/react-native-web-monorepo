import $t from 'i18n';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Modal, ModalBody, ModalFooter } from './baseModal';

const NoPermissionsForCameraModal = ({ isVisible, closeModal }) => {
  return (
    <Modal isVisible={isVisible} closeModal={closeModal}>
      <ModalBody>
        <Text>{$t('profile.updateUser.noPermissions')}</Text>
      </ModalBody>
      <ModalFooter>
        <TouchableOpacity onPress={closeModal}>
          <Text>{$t('common.ok')}</Text>
        </TouchableOpacity>
      </ModalFooter>
    </Modal>
  );
};

export default NoPermissionsForCameraModal;

NoPermissionsForCameraModal.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func
};
