
Loader Place for React Native Projects



## Installation

```sh
$ npm install react-native-loader-place --save
```

## Usage

```javascript
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { Circle, Rectangle } from 'react-native-loader-place'

export default class LoaderPlace extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Rectangle
            height={10}
            width={50}
            loaded={false}
            duration={900}
            backgroundColor: 'blue',
            animationColor: 'blue',
            style: {{ padding: 10}}>

            <Text>Onur Orhan</Text>

        </Rectangle>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:50
  },
});

```
## Props for Rectangle

All properties are optional

| Prop | Type | Default | Description |
|---|---|---|---|
|**`height`**|Number|15|used to specify the height of the rectangle|
|**`width`**|Number|70|used to specify the width of the rectangle|
|**`duration`**|Number|900|transition speed of animation|
|**`backgroundColor`**|blue|String|for a faint color on the background|
|**`animationColor`**|blue|String|the color of the animation that will pass above the background|
|**`style`**|Object| justifyContent:'center', alignItems:'center' |style of the Rectangle Loader|
|**`loaded`**|Boolean|true|if loaded is true that will be enable loading animation|

## Props for Circle

All properties are optional

| Prop | Type | Default | Description |
|---|---|---|---|
|**`radius`**|Number|30|used to specify the size of the circle, if radius is 20, size of circle 40x40 as width and height|
|**`duration`**|Number|900|transition speed of animation|
|**`backgroundColor`**|blue|Number|for a faint color on the background|
|**`animationColor`**|blue|Number|the color of the animation that will pass above the background|
|**`style`**|Object| justifyContent:'center', alignItems:'center' |style of the Circle Loader|
|**`loaded`**|Boolean|true|if loaded is true that will be enable loading animation|

## Support

Email onurorhan04@gmail.com for support
