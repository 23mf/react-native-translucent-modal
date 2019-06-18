import React, { Component } from "react";
import {Text, TouchableHighlight, View, StyleSheet, TouchableWithoutFeedback, Image, StatusBar } from "react-native";
import Modal from 'react-native-translucent-modal';

export default class ModalSample extends Component {
  state = {
    modalVisible: false,
  };

  componentDidMount(){
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <Modal
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <TouchableWithoutFeedback onPress={() => this.setModalVisible(!this.state.modalVisible)}>
            <View style={styles.wrapper}>
              <View style={styles.container}>
                <Image source={require('./img/test.png')} style={{ width: 285, height: 176}}/>
                <Text style={styles.text}>领取礼包</Text>
              </View>
            </View>

          </TouchableWithoutFeedback>
        </Modal>


        <View style={{flex: 1}}>
          <Image source={{uri: 'https://hbimg.huabanimg.com/637f9f357c4a83df1aa3cf2087a0b12c654e24bd3ef566-SYrIQb_fw658'}} style={ styles.image }/>
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            <Text>Show Modal</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(40, 40, 42, 0.6)',
  },

  image: {
    height: 200,
    resizeMode: 'cover',
  },

  text: {
    fontSize: 16,
    color: '#fff',
  },

  container: {
    width: 285,
    height: 176,
    backgroundColor: '#efeff2',
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: 12,
  },
});