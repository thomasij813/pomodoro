import React from 'react'

const Icon = (props) => {
  return <i className={props.children} onClick={props.handleClick}></i>
}

export default Icon
