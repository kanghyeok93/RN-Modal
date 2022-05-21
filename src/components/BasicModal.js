import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

/**
 * @param {Object} object
 * @param {boolean} object.isVisible
 * @param {boolean} object.isOneButton
 * @param {string} object.title
 * @param {function} object.onCancel
 */

const BasicModal = ({isVisible, isOneButton, title, onCancel}) => {
  const cancelModal = () => {
    return onCancel(isVisible);
  };

  const renderButton = () => {
    if (!isOneButton) {
      return (
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={cancelModal} style={styles.modalTwoButton}>
            <Text style={styles.modalCancelText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={cancelModal} style={styles.modalTwoButton}>
            <Text>OK</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <TouchableOpacity onPress={cancelModal} style={styles.modalOneButton}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={cancelModal}>
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
    borderRadius: 15,
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
  modalCancelText: {
    color: 'red',
  },
});

export default BasicModal;
