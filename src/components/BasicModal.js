import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

/**
 * @param {Object} object
 * @param {boolean} object.isVisible
 * @param {string} object.title
 * @param {function} object.onClose
 * @param {boolean} object.isOneButton
 */

const BasicModal = ({isVisible, title, onClose, isOneButton}) => {
  const closeModal = () => {
    return onClose(isVisible);
  };

  const renderButton = () => {
    if (!isOneButton) {
      return (
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={closeModal} style={styles.modalTwoButton}>
            <Text>CLOSE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={closeModal} style={styles.modalTwoButton}>
            <Text>OK</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <TouchableOpacity onPress={closeModal} style={styles.modalOneButton}>
          <Text>CLOSE</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={closeModal}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        {renderButton()}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  title: {
    margin: 15,
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
});

export default BasicModal;
