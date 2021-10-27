import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  constructor(props) {
    super(props);
    this.handleToggleLock = this.handleToggleLock.bind(this);
  }
  handleToggleLock() {
    this.props.handleToggleLock(this.props.idx);
  }

  render() {
    return (
      <button
        className={'Die'}
        style={{ backgroundColor: this.props.locked ? 'grey' : 'black' }}
        onClick={this.handleToggleLock}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;
