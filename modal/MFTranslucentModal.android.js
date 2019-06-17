import React from 'react';
import {
  I18nManager,
  Platform,
  StyleSheet,
  View,
  requireNativeComponent,
} from 'react-native';
import PropTypes from'prop-types';

const RCTModalHostView = requireNativeComponent('RCTTranslucentModalHostView', null);


/**
 * The Modal component is a simple way to present content above an enclosing view.
 *
 * See https://facebook.github.io/react-native/docs/modal.html
 */

class Modal extends React.Component {
  static propTypes = {
    /**
     * The `animationType` prop controls how the modal animates.
     *
     * See https://facebook.github.io/react-native/docs/modal.html#animationtype
     */
    animationType: PropTypes.oneOf(['none', 'slide', 'fade']),
    /**
     * The `transparent` prop determines whether your modal will fill the
     * entire view.
     *
     * See https://facebook.github.io/react-native/docs/modal.html#transparent
     */
    transparent: PropTypes.bool,
    /**
     * The `hardwareAccelerated` prop controls whether to force hardware
     * acceleration for the underlying window.
     *
     * See https://facebook.github.io/react-native/docs/modal.html#hardwareaccelerated
     */
    hardwareAccelerated: PropTypes.bool,
    /**
     * The `visible` prop determines whether your modal is visible.
     *
     * See https://facebook.github.io/react-native/docs/modal.html#visible
     */
    visible: PropTypes.bool,
    /**
     * The `onRequestClose` callback is called when the user taps the hardware
     * back button on Android or the menu button on Apple TV.
     *
     * See https://facebook.github.io/react-native/docs/modal.html#onrequestclose
     */
    onRequestClose: (Platform.isTVOS || Platform.OS === 'android') ? PropTypes.func.isRequired : PropTypes.func,
    /**
     * The `onShow` prop allows passing a function that will be called once the
     * modal has been shown.
     *
     * See https://facebook.github.io/react-native/docs/modal.html#onshow
     */
    onShow: PropTypes.func,
  };

  static defaultProps = {
    visible: true,
    hardwareAccelerated: false,
  };

  static contextTypes = {
    rootTag: PropTypes.number,
  };


  render() {
    if (this.props.visible === false) {
      return null;
    }

    const containerStyles = {
      backgroundColor: this.props.transparent ? 'transparent' : 'white',
    };

    let animationType = this.props.animationType;
    if (!animationType) {
      // manually setting default prop here to keep support for the deprecated 'animated' prop
      animationType = 'none';
    }

    const innerChildren = this.props.children;

    return (
      <RCTModalHostView
        animationType={animationType}
        transparent={this.props.transparent}
        hardwareAccelerated={this.props.hardwareAccelerated}
        onRequestClose={this.props.onRequestClose}
        onShow={this.props.onShow}
        style={styles.modal}
        onStartShouldSetResponder={this._shouldSetResponder}
      >
        <View style={[styles.container, containerStyles]}>
          {innerChildren}
        </View>
      </RCTModalHostView>
    );
  }

  // We don't want any responder events bubbling out of the modal.
  _shouldSetResponder = () => true
}

const side = I18nManager.isRTL ? 'right' : 'left';
const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
  },
  container: {
    position: 'absolute',
    [side]: 0,
    top: 0,
  },
});

module.exports = Modal;
