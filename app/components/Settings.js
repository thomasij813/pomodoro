import React from 'react'

import Icon from './Icon'
import displayTime from '../utils/displayTime'

const Settings = (props) => {
  let sessionIncrementerAmount = 300000  // 5 min
  let breakIncrementerAmount = 60000  // 1 min

  function handleSubmit(e) {
    e.preventDefault()
    props.updateTimerAmounts(props.session, props.break)
  }

  return (
    <div className="settings">
      <Icon handleClick={props.toggleDisplay}>undo fa fa-undo</Icon>
      <h3>Settings</h3>
      <Incrementer label="SESSION" amount={sessionIncrementerAmount}
        handleIncrement={props.increment}>
          {displayTime(props.session)}
      </Incrementer>
      <Incrementer label="BREAK" amount={breakIncrementerAmount}
        handleIncrement={props.increment}>
          {displayTime(props.break)}
      </Incrementer>
      <a href="#" onClick={handleSubmit}>Submit</a>
    </div>
  )
}

const Incrementer = (props) => {
  function handleClick(e) {
    let type = e.target.className.split(' ')[0]
    let label = props.label.toLowerCase()
    e.preventDefault()
    props.handleIncrement(label, type, props.amount)
  }
  return(
    <div className="incrementer">
      <span className="label">{props.label}</span>
      <span>{props.children}</span>
      <Icon handleClick={handleClick}>increase fa fa-plus</Icon>
      <Icon handleClick={handleClick}>decrease fa fa-minus</Icon>
    </div>
  )
}

export default Settings
