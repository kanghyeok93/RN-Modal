import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

/**
 * @param {Object} object
 * @param {boolean} object.isVisible
 * @param {function} object.onCancel
 */

// 하단 모달 컴포넌트
const BottomModal = ({isVisible, onCancel, children}) => {
  const cancelModal = () => {
    return onCancel(isVisible);
  };

  const renderButton = () => {
    return (
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={cancelModal} style={styles.modalButton}>
          <Text>CLOSE</Text>
        </TouchableOpacity>
      </View>
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
    height: '50%',
  },
  buttonWrapper: {
    alignSelf: 'flex-end',
  },
  modalButton: {
    width: '100%',
    alignItems: 'center',
    padding: 10,
  },
});

export default BottomModal;
