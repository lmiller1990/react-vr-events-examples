/*
const getTimestamp = () => new Date().getTime()

const getLastNChars = (str, n) => str.substr(str.length - n)

const getTimePassedInMs = () => {
  return elapsed * INTERVAL
}

function instance(setState, ctx) {
  const splits = getLastNChars(getTimePassedInMs().toString(), 3)

  time += INTERVAL

  elapsed = Math.floor(time / INTERVAL)

  if (elapsed * INTERVAL % 1000 == 0) {
    setState.call(ctx, { seconds: (elapsed * INTERVAL / 1000) })
    // el.innerText = (elapsed * INTERVAL / 1000)
  }

  const diff = (getTimestamp() - start) - time

  setTimeout(() => instance(setState, ctx), (INTERVAL - diff))
}*/

// export { instance }
const instance = () => {}
export { instance}

import React from 'react'
import {
  Text,
  View
} from 'react-vr'

const INTERVAL = 100
export default class Timer extends React.Component {
  constructor() {
    super()

    this.state = {
      seconds: 0,
      time: 0,
      elapsed: 0,
      start: this.getTimestamp()
    }

    this.instance = this.instance.bind(this)
    setTimeout(this.instance, INTERVAL)
  }

  getTimestamp() {
    return new Date().getTime()
  }

  instance() {
    // const splits = getLastNChars(getTimePassedInMs().toString(), 3)
    const newTime = this.state.time + INTERVAL 

    const elapsed = Math.floor(newTime / INTERVAL)

    if (elapsed * INTERVAL % 1000 == 0) {
      this.setState({ seconds: elapsed * INTERVAL / 1000 })
      // setState.call(ctx, { seconds: (elapsed * INTERVAL / 1000) })
      // el.innerText = (elapsed * INTERVAL / 1000)
    }

    const diff = (this.getTimestamp() - this.state.start) - newTime

    this.setState({ elapsed, time: newTime })

    setTimeout(this.instance, (INTERVAL - diff))
  }

  render() {
    return (
      <View>
        <Text>
          {this.state.seconds}
        </Text>
      </View>
    ) 
  }
}
