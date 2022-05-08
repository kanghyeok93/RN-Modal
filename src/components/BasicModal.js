import {View, Text, Button} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

const BasicModal = ({isVisible, title, onClose}) => {
  const closeButton = () => {
    return onClose(isVisible);
  };

  return (
    <Modal isVisible={isVisible}>
      <View style={{backgroundColor: '#FFFFFF'}}>
        <Text>{title}</Text>

        <Button onPress={closeButton} title="CLOSE" />
      </View>
    </Modal>
  );
};

export default BasicModal;
