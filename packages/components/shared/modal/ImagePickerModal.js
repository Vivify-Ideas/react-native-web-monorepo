import $t from 'i18n';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Modal, ModalBody, ModalFooter, ModalHeader } from './baseModal';

const ImagePickerModal = ({ isVisible, closeModal, galleryImport, openCamera }) => {
  return (
    <Modal isVisible={isVisible} closeModal={closeModal}>
      <ModalHeader>
        <Text>{$t('profile.updateUser.importImage')}</Text>
      </ModalHeader>
      <ModalBody>
        <TouchableOpacity onPress={openCamera}>
          <Text>{$t('profile.updateUser.takePicture')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={galleryImport}>
          <Text>{$t('profile.updateUser.importFromGallery')}</Text>
        </TouchableOpacity>
      </ModalBody>
      <ModalFooter>
        <TouchableOpacity onPress={closeModal}>
          <Text>{$t('common.cancel')}</Text>
        </TouchableOpacity>
      </ModalFooter>
    </Modal>
  );
};

export default ImagePickerModal;

ImagePickerModal.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func,
  openCamera: PropTypes.func,
  galleryImport: PropTypes.func
};
