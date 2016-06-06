import React from 'react'

import Icon from './Icon'
import displayTime from '../utils/displayTime'

const Timer = (props) => {
  let gear = undefined
  if (!props.counting) {
    gear = <Icon handleClick={props.handleDisplayToggle}>gear fa fa-gear</Icon>
  }
  let timerControl = props.counting ? 'pause fa fa-pause' : 'play fa fa-play'

  return (
    <div className="timer">
      <span className='timer-status'>{props.timerStatus.toUpperCase()}</span>
      {gear}
      <div className="time">{displayTime(props.time)}</div>
      <ProgBar width={130} complete={props.completionRatio} />
      <Icon handleClick={props.handleCountingToggle}>{timerControl}</Icon>
    </div>
  )
}

const ProgBar = (props) => {
  return (
    <svg width={props.width} height="10" className="progress-bar">
      <line x1="5" y1="5"
            x2={(props.width * props.complete) + 5} y2="5">
      </line>
    </svg>
  )
}

export default Timer
