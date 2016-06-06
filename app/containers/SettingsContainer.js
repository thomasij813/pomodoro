import React from 'react'

import Settings from '../components/Settings'

export default class SettingsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      session: props.currentsession,
      break: props.currentBreak
    }
  }

  increment(timer, direction, amount) {
     let maxsession = 3300000    // 55 min
     let minsession = 300000    // 5 min
     let maxBreak = 1800000   // 30 min
     let minBreak = 60000     // 1 min

    if (timer === 'session') {
      let newsession = direction === 'increase' ? this.state.session + amount : this.state.session - amount
      newsession = newsession < minsession ? minsession : newsession
      newsession = newsession > maxsession ? maxsession : newsession
      this.setState({
        session:  newsession
      })
    }

    if (timer === 'break') {
      let newBreak = direction === 'increase' ? this.state.break + amount : this.state.break - amount
      newBreak = newBreak < minBreak ? minBreak : newBreak
      newBreak = newBreak > maxBreak ? maxBreak : newBreak
      this.setState({
        break:  newBreak
      })
    }
  }

  render() {
    return <Settings
      toggleDisplay={this.props.toggleDisplay}
      session={this.state.session} break={this.state.break}
      increment={this.increment.bind(this)}
      updateTimerAmounts={this.props.updateTimerAmounts} />
  }
}
