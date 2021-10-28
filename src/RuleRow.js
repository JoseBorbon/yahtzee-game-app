import React, { Component } from 'react';
import { descriptions } from './data/descriptions';
import './RuleRow.css';

class RuleRow extends Component {
  static defaultProps = { descriptions: descriptions };
  constructor(props) {
    super(props);
    this.handleRuleLock = this.handleRuleLock.bind(this);
  }
  handleRuleLock() {
    this.props.doScore();
    this.props.handleRuleLock(this.props.idx);
  }
  render() {
    return (
      <tr
        className={
          this.props.isLocked ? 'RuleRow-disabled' : 'RuleRow RuleRow-active'
        }
        onClick={this.handleRuleLock}
      >
        <td className="RuleRow-name">{this.props.name}</td>
        {/* Display description for rule, then ONCE LOCKED display score*/}
        <td className="RuleRow-score">
          {this.props.isLocked
            ? this.props.score
            : this.props.descriptions[this.props.idx]}
        </td>
      </tr>
    );
  }
}

export default RuleRow;
