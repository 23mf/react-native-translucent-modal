# react-native-modal-translucent
A library for React Native translucent modal

##### 背景
react-native 提供的`Modal`组件在Android上显示时不能延伸到状态栏，为什呢？ 这与Android的原生实现有关，`Modal`组件对应到Android原生是用`Dialog`实现，因为 dialog 本身也不会延伸到状态栏的。如何让`Modal`在Android 上的显示效果能像在ios 设备上一样呢？这就是本库所提供的。使用很简单，只需要一行代码即可。

##### Setup

1、使用npm

```
$ npm install react-native-translucent-modal -save
```

或使用yarn

```
$ yarn add react-native-translucent-modal
```

2、然后link

```
$ react-native react-native-translucent-modal
```

##### Usage

`react-native-translucent-modal` 的使用与 react-native 提供`Modal`的组件完全一样，他们的属性和方法完全相同，你只需要将`Modal`的引入方式更改一下即可，其他的完全不用变

```
import { Modal } from "react-native";
```

改为

```
import Modal from 'react-native-translucent-modal';
```

好了，就只需要更改这一行代码，你的`Modal`现在就可以延伸到状态栏了。



