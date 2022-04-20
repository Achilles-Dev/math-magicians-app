import React, { Component } from 'react';
import './Calculator.css';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (
      <div className="container">
        <div className="main-display">
          <div className="result-display">
            0
          </div>
        </div>
        <button className="clear" data-key="" type="button">AC</button>
        <button className="bracket" data-key="" type="button">+/-</button>
        <button className="percent" data-key="80" type="button">%</button>
        <button className="operator" data-key="191" type="button">÷</button>
        <button className="number" data-key="55" type="button">7</button>
        <button className="number" data-key="56" type="button">8</button>
        <button className="number" data-key="57" type="button">9</button>
        <button className="operator" data-key="56" type="button">x</button>
        <button className="number" data-key="52" type="button">4</button>
        <button className="number" data-key="53" type="button">5</button>
        <button className="number" data-key="54" type="button">6</button>
        <button className="operator" data-key="173" type="button">-</button>
        <button className="number" data-key="49" type="button">1</button>
        <button className="number" data-key="50" type="button">2</button>
        <button className="number" data-key="51" type="button">3</button>
        <button className="operator" data-key="187" type="button">+</button>
        <button id="zero" className="number" data-key="48" type="button">0</button>
        <button className="decimal" data-key="190" type="button">.</button>
        <button className="equal" data-key="187" type="button">=</button>

      </div>
    );
  }
}

export default Calculator;
