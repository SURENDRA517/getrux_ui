import React, { Component } from 'react';
import { render } from 'react-dom';

class Hello extends Component {
  render() {
    alert("tessd")
    return <h1>Hello</h1>
  }
}

render(<Hello/>, document.getElementById('app'));
