import React, {useState} from 'react';
import {SafeAreaView, Button} from 'react-native';
import BasicModal from './src/components/BasicModal';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = modalVisible => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView>
      <BasicModal
        isVisible={modalVisible}
        title={'I am the modal content!'}
        onClose={toggleModal}
      />

      <Button onPress={() => toggleModal(modalVisible)} title="Modal Click" />
    </SafeAreaView>
  );
};

export default App;
