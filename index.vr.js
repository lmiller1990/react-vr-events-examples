import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet
} from 'react-vr';

const styles = StyleSheet.create({
  view: {
    width: 1,
    height: 1,
    backgroundColor: 'lime',
    transform: [{ translate: [0, 0, -1] }],
    layoutOrigin: [0.5, 0.5],
  }
})

export default class Events extends React.Component {
  constructor() {
    super()

    this.state = { count: 0 }
  }

  handle(e) {
    const evt = e.nativeEvent.inputEvent
    if (evt.type === 'KeyboardInputEvent') {
      this.setState({ count: this.state.count + 1 })
      console.log(`Key pressed. \nkeyCode: ${evt.keyCode}.\nkey: ${evt.key}\neventType: ${evt.eventType}`)

    }
  }

  render() {
    return (
      <View 
        onInput={e => this.handle(e)}
        style={styles.view}
      >
        <Text>
          {this.state.count}
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('Events', () => Events);
