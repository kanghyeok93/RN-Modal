import {StyleSheet, SafeAreaView, Button, Text} from 'react-native';
import React, {useState} from 'react';
import BasicModal from './src/components/BasicModal';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = _isVisible => {
    setModalVisible(!_isVisible);
  };

  const okModal = () => {
    console.log('Modal OK !!!');
  };

  return (
    <SafeAreaView>
      <BasicModal
        isVisible={modalVisible}
        onCancel={toggleModal}
        onOK={okModal}>
        <Text style={styles.title}>I am the modal content!</Text>
      </BasicModal>

      <Button onPress={() => toggleModal(modalVisible)} title="Modal Click" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    margin: 15,
  },
});

export default App;
