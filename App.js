import {StyleSheet, SafeAreaView, Button, Text} from 'react-native';
import React, {useState} from 'react';
import BasicModal from './src/components/modal/BasicModal';
import BottomModal from './src/components/modal/BottomModal';
import SwiperModal from './src/components/modal/SwiperModal';

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

      {/* <BottomModal
        isVisible={modalVisible}
        onCancel={toggleModal}
        onOK={okModal}>
        <Text style={styles.title}>I am the bottom modal content!</Text>
      </BottomModal> */}

      <SwiperModal
        isVisible={modalVisible}
        onCancel={toggleModal}
        onOK={okModal}>
        <Text style={styles.title}>I am the bottom swiper content!</Text>
      </SwiperModal>

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
