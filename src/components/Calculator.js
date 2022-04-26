import React, { useState } from 'react';
import './Calculator.css';
import calculate from './logic/calculate';

const operators = ['+', '-', 'x', '÷', '=', '%'];

const Calculator = () => {
  const [results, setResults] = useState('0');
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(0);
  const [operation, setOperation] = useState(null);

  const updateDisplay = (object, value) => {
    if (value === '=' && !object.total) {
      setResults('0');
      setTotal(0);
      setNext(0);
      setOperation(null);
    } else if (value === '=' && object.total) {
      setResults(object.total);
      setTotal(object.total);
      setNext(0);
      setOperation(null);
    } else if ((value === '+/-' || value === '%') && !object.next && !object.total) {
      setResults('0');
      setOperation(null);
    } else if (value === '%' && object.total) {
      setResults(`${object.total} ${value}`);
    } else if (operators.includes(value) && value !== '=') {
      setResults(`${object.total} ${value}`);
    } else if (value === 'AC') {
      setResults('0');
    } else if (object.next) {
      setResults(object.next);
    } else {
      setResults('0');
    }
  };

  const updateObjects = (object) => {
    setTotal(object.total);
    setNext(object.next);
  };

  const handleClick = (event) => {
    const object = {
      total,
      next,
      operation,
    };

    if (operators.includes(event.target.innerHTML)) {
      setOperation(event.target.innerHTML);
    }
    const newObj = calculate(object, event.target.innerHTML);
    updateObjects(newObj);
    updateDisplay(newObj, event.target.innerHTML);
  };

  return (
    <div className="container">
      <div className="main-display">
        <div className="result-display">
          {results}
        </div>
      </div>
      <button className="clear" data-key="" type="button" onClick={handleClick}>AC</button>
      <button className="bracket" data-key="" type="button" onClick={handleClick}>+/-</button>
      <button className="percent" data-key="80" type="button" onClick={handleClick}>%</button>
      <button className="operator" data-key="191" type="button" onClick={handleClick}>÷</button>
      <button className="number" data-key="55" type="button" onClick={handleClick}>7</button>
      <button className="number" data-key="56" type="button" onClick={handleClick}>8</button>
      <button className="number" data-key="57" type="button" onClick={handleClick}>9</button>
      <button className="operator" data-key="56" type="button" onClick={handleClick}>x</button>
      <button className="number" data-key="52" type="button" onClick={handleClick}>4</button>
      <button className="number" data-key="53" type="button" onClick={handleClick}>5</button>
      <button className="number" data-key="54" type="button" onClick={handleClick}>6</button>
      <button className="operator" data-key="173" type="button" onClick={handleClick}>-</button>
      <button className="number" data-key="49" type="button" onClick={handleClick}>1</button>
      <button className="number" data-key="50" type="button" onClick={handleClick}>2</button>
      <button className="number" data-key="51" type="button" onClick={handleClick}>3</button>
      <button className="operator" data-key="187" type="button" onClick={handleClick}>+</button>
      <button id="zero" className="number" data-key="48" type="button" onClick={handleClick}>0</button>
      <button className="decimal" data-key="190" type="button" onClick={handleClick}>.</button>
      <button className="equal" data-key="187" type="button" onClick={handleClick}>=</button>

    </div>
  );
};

// // eslint-disable-next-line react/prefer-stateless-function
// class Calculator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       results: '0',
//       total: 0,
//       next: 0,
//       operation: null,
//     };
//   }

//   handleClick = (event) => {
//     const { total, next, operation } = this.state;
//     const object = {
//       total,
//       next,
//       operation,
//     };
//     if (operators.includes(event.target.innerHTML)) {
//       this.setState({
//         operation: event.target.innerHTML,
//       });
//     }
//     const newObj = calculate(object, event.target.innerHTML);
//     this.updateObjects(newObj);
//     this.updateDisplay(newObj, event.target.innerHTML);
//   }

//   updateObjects = (object) => {
//     this.setState({
//       total: object.total,
//       next: object.next,
//     });
//   }

//   updateDisplay = (object, value) => {
//     if (value === '=' && !object.total) {
//       this.setState({
//         results: '0',
//         total: 0,
//         next: 0,
//         operation: null,
//       });
//     } else if (value === '=' && object.total) {
//       this.setState({
//         results: object.total,
//         total: object.total,
//         next: 0,
//       });
//     } else if ((value === '+/-' || value === '%') && !object.next && !object.total) {
//       this.setState({
//         results: '0',
//         operation: null,
//       });
//     } else if (value === '%' && object.total) {
//       this.setState({
//         results: `${object.total} ${value}`,
//       });
//     } else if (operators.includes(value) && value !== '=') {
//       this.setState({
//         results: `${object.total} ${value}`,
//       });
//     } else if (value === 'AC') {
//       this.setState({
//         results: '0',
//       });
//     } else if (object.next) {
//       this.setState({
//         results: object.next,
//       });
//     } else {
//       this.setState({
//         results: '0',
//       });
//     }
//   }

//   render() {
//     const { results } = this.state;
//     return (
//       <div className="container">
//         <div className="main-display">
//           <div className="result-display">
//             {results}
//           </div>
//         </div>
// <button className="clear" data-key="" type="button" onClick={this.handleClick}>AC</button>
// <button className="bracket" data-key="" type="button" onClick={this.handleClick}>+/-</button>
// <button className="percent" data-key="80" type="button" onClick={this.handleClick}>%</button>
// <button className="operator" data-key="191" type="button" onClick={this.handleClick}>÷</button>
// <button className="number" data-key="55" type="button" onClick={this.handleClick}>7</button>
// <button className="number" data-key="56" type="button" onClick={this.handleClick}>8</button>
// <button className="number" data-key="57" type="button" onClick={this.handleClick}>9</button>
// <button className="operator" data-key="56" type="button" onClick={this.handleClick}>x</button>
// <button className="number" data-key="52" type="button" onClick={this.handleClick}>4</button>
// <button className="number" data-key="53" type="button" onClick={this.handleClick}>5</button>
// <button className="number" data-key="54" type="button" onClick={this.handleClick}>6</button>
// <button className="operator" data-key="173" type="button" onClick={this.handleClick}>-</button>
// <button className="number" data-key="49" type="button" onClick={this.handleClick}>1</button>
// <button className="number" data-key="50" type="button" onClick={this.handleClick}>2</button>
// <button className="number" data-key="51" type="button" onClick={this.handleClick}>3</button>
// <button className="operator" data-key="187" type="button" onClick={this.handleClick}>+</button>
// <button id="zero" className="number" data-key="48" type="button" onClick={this.handleClick}>0
// </button>
// <button className="decimal" data-key="190" type="button" onClick={this.handleClick}>.</button>
// <button className="equal" data-key="187" type="button" onClick={this.handleClick}>=</button>

//       </div>
//     );
//   }
// }

export default Calculator;
