import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  constructor(props) {
    super(props);
    this.toggleLock = this.toggleLock.bind(this);
  }
  toggleLock() {
    this.props.handleToggleLock(this.props.idx);
  }

  render() {
    //depending on value create an element and assign it fas-dice-one / dice-two etc.
    const diceMap = new Map([
      [1, 'one'],
      [2, 'two'],
      [3, 'three'],
      [4, 'four'],
      [5, 'five'],
      [6, 'six'],
    ]);

    const die = (
      <i
        className={`fas fa-dice-${diceMap.get(this.props.val)} ${
          this.props.locked ? 'Die-locked' : 'Die'
        } ${this.props.isRolling && !this.props.locked ? 'Die-rolling' : ''}`}
        onClick={this.toggleLock}
      ></i>
    );
    return <>{die}</>;
  }
}

export default Die;
