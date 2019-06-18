# react-native-translucent-modal
A library for React Native Translucent Modal On Android

Chinese introduction：
[中文文档介绍](/README-zh-rCN.md)

### Background
The `Modal` component provided by `react-native` does not extend to the status bar when displayed on Android. Why? This is related to the native implementation of Android. The `Modal` component corresponds to Android native implementation with `Dialog`, because the dialog itself does not extend to the status bar. How can I make `Modal` appear on Android like on an iOS device? This is what the library provides. It's very simple to use, just one line of code.

### Effect comparison

Before using `react-native-translucent-modal`：

`splash`:

<img src="/screen-shot/screenshot-before.jpg" width = "50%" height = "70%" alt="before1" align=center />

>

`Pop：`

<img src="/screen-shot/screenshot-pop-before.jpg" width = "50%" height = "70%" alt="before1" align=center />

>

After using `react-native-translucent-modal`：

`splash`:

<img src="/screen-shot/screenshot-after.jpg" width = "50%" height = "70%" alt="after1" align=center />

>
`Pop`:

<img src="/screen-shot/screenshot-pop-after.jpg" width = "50%" height = "70%" alt="after1" align=center />

### Setup

1、Use npm

```
$ npm install react-native-translucent-modal --save
```

Or use yarn

```
$ yarn add react-native-translucent-modal
```

2、then link

```
$ react-native link react-native-translucent-modal
```

### Usage

The use of `react-native-translucent-modal` is exactly the same as that of the react-native providing `Modal`. Their properties and methods are exactly the same. You only need to change the import of `Modal`, the other is completely Don't change

```
import { Modal } from "react-native";
```

change to

```
import Modal from 'react-native-translucent-modal';
```

Ok, just change this line of code, your `Modal` can now be extended to the status bar.

On iOS devices, the `Modal` component provided by react native is still used., you can view the `MFTranslucentModal.ios.js` file for detail.


### Thanks 

thanks [react-native-modal-translucent](https://github.com/listenzz/react-native-modal-translucent) library for providing ideas