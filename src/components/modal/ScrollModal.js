import React from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';

/**
 * @param {Object} object
 * @param {boolean} object.isVisible
 * @param {function} object.onCancel
 * @param {Object} object.scrollViewRef
 * @param {number} object.scrollOffset
 */

// 스크롤 모달 컴포넌트
const ScrollModal = ({
  isVisible,
  onCancel,
  scrollViewRef,
  scrollOffset,
  children,
}) => {
  const cancelModal = () => {
    return onCancel(isVisible);
  };

  const handleScrollTo = p => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo(p);
    }
  };

  /**
   * propagateSwipe - 스와이프 이벤트가 하위 구성요소에 전파되도록 허용 유무 (ex ScrollView)
   *  */
  return (
    <Modal
      isVisible={isVisible}
      style={styles.view}
      onSwipeComplete={cancelModal}
      swipeDirection={['down']}
      scrollTo={handleScrollTo}
      scrollOffset={scrollOffset}
      scrollOffsetMax={400 - 300}
      propagateSwipe={true}>
      <View style={styles.container}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    height: 300,
  },
});

export default ScrollModal;
