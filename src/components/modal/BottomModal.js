import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

/**
 * @param {Object} object
 * @param {boolean} object.isVisible
 * @param {function} object.onCancel
 * @param {function} object.onOK
 */

const BottomModal = ({isVisible, onCancel, onOK, children}) => {
  const cancelModal = () => {
    return onCancel(isVisible);
  };

  const okModal = () => {
    onCancel(isVisible);

    return onOK();
  };

  const renderButton = () => {
    return (
      <TouchableOpacity onPress={okModal} style={styles.modalButton}>
        <Text>CLOSE</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      isVisible={isVisible}
      style={styles.view}
      onBackdropPress={cancelModal}>
      <View style={styles.container}>
        {renderButton()}

        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
  },
  modalButton: {
    width: '100%',
    alignItems: 'center',
    padding: 10,
  },
});

export default BottomModal;
