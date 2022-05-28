import {StyleSheet, SafeAreaView, Button, Text} from 'react-native';
import React, {useState} from 'react';
import BasicModal from './src/components/modal/BasicModal';
import BottomModal from './src/components/modal/BottomModal';

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
      {/* <BasicModal
        isVisible={modalVisible}
        onCancel={toggleModal}
        onOK={okModal}>
        <Text style={styles.title}>I am the baisc modal content!</Text>
      </BasicModal> */}

      <BottomModal
        isVisible={modalVisible}
        onCancel={toggleModal}
        onOK={okModal}>
        <Text style={styles.title}>I am the bottom modal content!</Text>
      </BottomModal>

      <Button onPress={() => toggleModal(modalVisible)} title="Modal Click" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    margin: 15,
    textAlign: 'center',
  },
});

export default App;
