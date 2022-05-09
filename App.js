import React, {useState} from 'react';
import {SafeAreaView, Button} from 'react-native';
import BasicModal from './src/components/BasicModal';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = _isVisible => {
    setModalVisible(!_isVisible);
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
