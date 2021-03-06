import React, { Component } from 'react';
import Die from './Die';
import './Dice.css';

class Dice extends Component {
  render() {
    const dices = this.props.dice.map((d, idx) => (
      <Die
        handleToggleLock={this.props.handleToggleLock}
        val={d}
        isRolling={this.props.isRolling}
        locked={this.props.locked[idx]}
        idx={idx}
        key={idx}
      />
    ));
    return <div className="Dice">{dices}</div>;
  }
}

export default Dice;
