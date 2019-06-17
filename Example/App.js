import React, { Component } from "react";
import { Text, TouchableHighlight, View, StyleSheet, TouchableWithoutFeedback, Image } from "react-native";
import Modal from 'react-native-translucent-modal';

export default class App extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <TouchableWithoutFeedback style={styles.wrapper} onPress={() => this.setModalVisible(!this.state.modalVisible)}>
              <Image source={{ uri: 'https://hbimg.huabanimg.com/ed258f740ab675e3b3a0b6e7abc44eb7bd832c523396b-cJL1G9_fw658' }} style={styles.imageBackground} />
            </TouchableWithoutFeedback>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
});