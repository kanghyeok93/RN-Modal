import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

/**
 * @param {Object} object
 * @param {boolean} object.isVisible
 * @param {boolean} object.isOneButton
 * @param {function} object.onCancel
 * @param {function} object.onOK
 */

// 기본 모달 컴포넌트
const BasicModal = ({isVisible, isOneButton, onCancel, onOK, children}) => {
  const cancelModal = () => {
    return onCancel(isVisible);
  };

  const okModal = () => {
    onCancel(isVisible);

    return onOK();
  };

  const renderButton = () => {
    if (!isOneButton) {
      return (
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={cancelModal} style={styles.modalTwoButton}>
            <Text style={styles.modalCancelText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={okModal} style={styles.modalTwoButton}>
            <Text>OK</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <TouchableOpacity onPress={okModal} style={styles.modalOneButton}>
          <Text>OK</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={cancelModal}>
      <View style={styles.container}>
        {children}

        {renderButton()}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  modalOneButton: {
    width: '100%',
    alignItems: 'center',
    padding: 10,
  },
  modalTwoButton: {
    width: '50%',
    alignItems: 'center',
    padding: 10,
  },
  modalCancelText: {
    color: 'red',
  },
});

export default BasicModal;
