import React from 'react';
import {render} from 'react-dom'

import Main from './containers/Main'

require('./sass/style.scss')

class HelloWorld extends React.Component {
  render() {
    return <Main />
  }
}

render(
  <HelloWorld />,
  document.getElementById('app')
)
