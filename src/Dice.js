import React, { Component } from 'react';
import Die from './Die';
import './Dice.css';

class Dice extends Component {
  render() {
    const dices = this.props.dice.map((d, idx) => (
      <Die
        handleClick={this.props.handleClick}
        val={d}
        locked={this.props.locked[idx]}
        idx={idx}
        key={idx}
      />
    ));
    return <div className="Dice">{dices}</div>;
  }
}

export default Dice;
