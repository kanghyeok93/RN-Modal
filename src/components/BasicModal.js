import {StyleSheet, View, Text, Button} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

const BasicModal = ({isVisible, title, onClose}) => {
  const closeModal = () => {
    return onClose(isVisible);
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={closeModal}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        <View>
          <Button onPress={closeModal} title="CLOSE" />
        </View>
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
});

export default BasicModal;
