import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import TimerContainer from './TimerContainer'
import SettingsContainer from './SettingsContainer'

let alert = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3')

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: 'timer',
      timerStatus: 'session',
      session: 1500000,
      break: 300000,
      time: 1500000,
    }
  }

  toggleDisplay() {
    this.setState({
      display: this.state.display === 'timer' ? 'settings' : 'timer'
    })
  }

  toggleStatus() {
    let newTimerStatus = this.state.timerStatus === 'session' ? 'break' : 'session'
    let newTime = newTimerStatus === 'session' ? this.state.session : this.state.break
    this.setState({
      timerStatus: newTimerStatus,
      time: newTime
    }, () => {
      alert.play()
    })
  }

  updateTimerAmounts(newsession, newBreak) {
    this.setState({
      session: newsession,
      break: newBreak,
      time: newsession,
    }, this.toggleDisplay())
  }

  countdown() {
    window.setTimeout(() => {
      if (this.state.time <= 0) {
        this.toggleStatus()
      } else {
        this.setState({
          time: this.state.time - 50
        })
      }
    }, 50)
  }

  render() {
    const maxTime = this.state.timerStatus === 'session' ? this.state.session : this.state.break

    const timer =  <TimerContainer
      maxTime={maxTime} time={this.state.time}
      timerStatus={this.state.timerStatus}
      toggleStatus={this.toggleStatus.bind(this)}
      toggleDisplay={this.toggleDisplay.bind(this)}
      countdown={this.countdown.bind(this)}
      key='timer'/>

    const settings = <SettingsContainer
      currentsession={this.state.session} currentBreak={this.state.break}
      toggleDisplay={this.toggleDisplay.bind(this)}
      updateTimerAmounts={this.updateTimerAmounts.bind(this)}
      key='settings'/>

    const view = this.state.display === 'timer' ? timer : settings

    return (
      <div className='wrapper'>
        <ReactCSSTransitionGroup transitionName="fade"
          transitionEnterTimeout={300} transitionLeaveTimeout={25}>
          {view}
        </ReactCSSTransitionGroup>
      </div>
    )
  }

}
