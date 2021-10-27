import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance,
} from './Rules';

class ScoreTable extends Component {
  render() {
    const { scores, doScore, lockedRules } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow
                name="Ones"
                score={scores.ones}
                doScore={(evt) => doScore('ones', ones.evalRoll, 0)}
                isLocked={lockedRules[0]}
                handleRuleLock={this.props.handleRuleLock}
                idx={0}
              />
              <RuleRow
                name="Twos"
                score={scores.twos}
                doScore={(evt) => doScore('twos', twos.evalRoll, 1)}
                isLocked={lockedRules[1]}
                handleRuleLock={this.props.handleRuleLock}
                idx={1}
              />
              <RuleRow
                name="Threes"
                score={scores.threes}
                doScore={(evt) => doScore('threes', threes.evalRoll, 2)}
                isLocked={lockedRules[2]}
                handleRuleLock={this.props.handleRuleLock}
                idx={2}
              />
              <RuleRow
                name="Fours"
                score={scores.fours}
                doScore={(evt) => doScore('fours', fours.evalRoll, 3)}
                isLocked={lockedRules[3]}
                handleRuleLock={this.props.handleRuleLock}
                idx={3}
              />
              <RuleRow
                name="Fives"
                score={scores.fives}
                doScore={(evt) => doScore('fives', fives.evalRoll, 4)}
                isLocked={lockedRules[4]}
                handleRuleLock={this.props.handleRuleLock}
                idx={4}
              />
              <RuleRow
                name="Sixes"
                score={scores.sixes}
                doScore={(evt) => doScore('sixes', sixes.evalRoll, 5)}
                isLocked={lockedRules[5]}
                handleRuleLock={this.props.handleRuleLock}
                idx={5}
              />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow
                name="Three of Kind"
                score={scores.threeOfKind}
                doScore={(evt) =>
                  doScore('threeOfKind', threeOfKind.evalRoll, 6)
                }
                isLocked={lockedRules[6]}
                handleRuleLock={this.props.handleRuleLock}
                idx={6}
              />
              <RuleRow
                name="Four of Kind"
                score={scores.fourOfKind}
                doScore={(evt) => doScore('fourOfKind', fourOfKind.evalRoll, 7)}
                isLocked={lockedRules[7]}
                handleRuleLock={this.props.handleRuleLock}
                idx={7}
              />
              <RuleRow
                name="Full House"
                score={scores.fullHouse}
                doScore={(evt) => doScore('fullHouse', fullHouse.evalRoll, 8)}
                isLocked={lockedRules[8]}
                handleRuleLock={this.props.handleRuleLock}
                idx={8}
              />
              <RuleRow
                name="Small Straight"
                score={scores.smallStraight}
                doScore={(evt) =>
                  doScore('smallStraight', smallStraight.evalRoll, 9)
                }
                isLocked={lockedRules[9]}
                handleRuleLock={this.props.handleRuleLock}
                idx={9}
              />
              <RuleRow
                name="Large Straight"
                score={scores.largeStraight}
                doScore={(evt) =>
                  doScore('largeStraight', largeStraight.evalRoll, 10)
                }
                isLocked={lockedRules[10]}
                handleRuleLock={this.props.handleRuleLock}
                idx={10}
              />
              <RuleRow
                name="Yahtzee"
                score={scores.yahtzee}
                doScore={(evt) => doScore('yahtzee', yahtzee.evalRoll, 11)}
                isLocked={lockedRules[11]}
                handleRuleLock={this.props.handleRuleLock}
                idx={11}
              />
              <RuleRow
                name="Chance"
                score={scores.chance}
                doScore={(evt) => doScore('chance', chance.evalRoll, 12)}
                isLocked={lockedRules[12]}
                handleRuleLock={this.props.handleRuleLock}
                idx={12}
              />
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default ScoreTable;
