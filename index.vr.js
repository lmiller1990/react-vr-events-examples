import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet
} from 'react-vr';
import {
  instance 
} from './timer'

import Timer from './timer'

const styles = StyleSheet.create({
  view: {
    width: 1,
    height: 1,
    backgroundColor: 'lime',
    transform: [{ translate: [0, 0, -1] }],
    layoutOrigin: [0.5, 0.5],
  },
  entered: {
    borderColor: 'red',
    borderWidth: 0.05
  }
})

export default class Events extends React.Component {
  constructor() {
    super()

    this.state = { 
      count: 0,
      seconds: 0,
      entered: false,
    }
  }

  componentDidMount() {
    console.log(this.setState)
    instance(this.setState, this)
  }

  handle(e) {
    const evt = e.nativeEvent.inputEvent
    if (evt.type === 'KeyboardInputEvent') {
      console.log(`Key pressed. \nkeyCode: ${evt.keyCode}.\nkey: ${evt.key}\neventType: ${evt.eventType}`)
    }
  }

  render() {
    return (
      <View 
        onInput={e => this.handle(e)}
        style={[styles.view, this.state.entered ? styles.entered: {}]}
      >
        <Text>
          {this.state.seconds}
        </Text>
        <Timer />
      </View>
    );
  }
};

AppRegistry.registerComponent('Events', () => Events);
