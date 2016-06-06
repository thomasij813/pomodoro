import React from 'react'

import Timer from '../components/Timer'

export default class TimerContainer extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      counting: false
    }
  }

  toggleCounting() {
    this.setState({
      counting: !this.state.counting
    })
  }

  componentDidUpdate() {
    if (this.state.counting) {
      this.props.countdown()
    }
  }

  render() {
    const max = this.props.maxTime
    const diff = max - this.props.time
    const ratio = diff / max
    return(
      <Timer
        handleCountingToggle={this.toggleCounting.bind(this)}
        handleDisplayToggle={this.props.toggleDisplay}
        counting={this.state.counting}
        completionRatio={ratio}
        time={this.props.time}
        timerStatus={this.props.timerStatus}
        key="timer" />
    )
  }
}
