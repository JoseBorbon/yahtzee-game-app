import React, { Component } from 'react';
import './RuleRow.css';

class RuleRow extends Component {
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
      <tr className="RuleRow RuleRow-active" onClick={this.handleRuleLock}>
        <td className="RuleRow-name">{this.props.name}</td>
        {/* Display description for rule, then ONCE LOCKED display score*/}
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    );
  }
}

export default RuleRow;
