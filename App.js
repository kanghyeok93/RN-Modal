import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Button,
  Text,
} from 'react-native';
import React, {useState, useRef} from 'react';
import BasicModal from './src/components/modal/BasicModal';
import BottomModal from './src/components/modal/BottomModal';
import SwiperModal from './src/components/modal/SwiperModal';
import ScrollModal from './src/components/modal/ScrollModal';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(null);

  const scrollViewRef = useRef();

  const toggleModal = _isVisible => {
    setModalVisible(!_isVisible);
  };

  const okModal = () => {
    console.log('Modal OK !!!');
  };

  const handleOnScroll = e => {
    setScrollOffset(e.nativeEvent.contentOffset.y);
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

      {/* <SwiperModal
        isVisible={modalVisible}
        onCancel={toggleModal}
        onOK={okModal}>
        <Text style={styles.title}>I am the bottom swiper content!</Text>
      </SwiperModal> */}

      <ScrollModal
        isVisible={modalVisible}
        onCancel={toggleModal}
        onOK={okModal}
        scrollViewRef={scrollViewRef}
        scrollOffset={scrollOffset}>
        <ScrollView
          ref={scrollViewRef}
          onScroll={handleOnScroll}
          scrollEventThrottle={16}>
          <View style={styles.scrollableModalContent1}>
            <Text style={styles.scrollableModalText1}>
              You can scroll me up! 👆
            </Text>
          </View>
          <View style={styles.scrollableModalContent2}>
            <Text style={styles.scrollableModalText2}>
              Same here as well! ☝
            </Text>
          </View>
        </ScrollView>
      </ScrollModal>

      <Button onPress={() => toggleModal(modalVisible)} title="Modal Click" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    margin: 15,
    textAlign: 'center',
  },
  scrollableModalContent1: {
    height: 200,
    backgroundColor: '#87BBE0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText1: {
    fontSize: 20,
    color: 'white',
  },
  scrollableModalContent2: {
    height: 200,
    backgroundColor: '#A9DCD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText2: {
    fontSize: 20,
    color: 'white',
  },
});

export default App;
