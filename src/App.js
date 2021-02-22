import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstNumber: '',
      secondNumber: '',
      operator: '',
      finalCalculation: ''
    }
  }


  takeNumber = (event) => {
    this.setState({ finalCalculation: '' })
    if(!this.state.operator) {
      if(this.state.firstNumber !== '0')
      this.setState(prevState => {
        return {
          firstNumber: prevState.firstNumber + event.target.value
        }
      })
    } else {
      this.setState(prevState => {
        return {
          secondNumber: prevState.secondNumber + event.target.value
        }
      })
    }
  }

  takeOperator = (event) => {
    this.setState({ operator: event.target.value })
  }

  answer = () => {
    const { operator } = this.state
    let firstNumber = Number(this.state.firstNumber)
    let secondNumber = Number(this.state.secondNumber)
    if(operator === '*') {
      this.setState({ 
        finalCalculation: firstNumber * secondNumber,
        firstNumber: firstNumber * secondNumber
      })
    } else if(operator === '/') {
      this.setState({ 
        finalCalculation: firstNumber / secondNumber,
        firstNumber: firstNumber / secondNumber
      })
    } else if(operator === '+') {
      this.setState({ 
        finalCalculation: firstNumber + secondNumber,
        firstNumber: firstNumber + secondNumber
      })
    } else if(operator === '-') {
      this.setState({ 
        finalCalculation: firstNumber - secondNumber,
        firstNumber: firstNumber - secondNumber
      })
    }
  }

  dotButton = () => {
    const { firstNumber, secondNumber, operator } = this.state 
    if(!operator) {
      if(firstNumber && firstNumber[firstNumber.length - 1] !== '.') {
        this.setState(prevState => {
          return {
            firstNumber: prevState.firstNumber + '.'
          }
        })
      }
    } else {
      if(secondNumber && secondNumber[secondNumber.length - 1] !== '.') {
        this.setState(prevState => {
          return {
            secondNumber: prevState.secondNumber + '.'
          }
        })
      }
    }
  }

  delbutton = () => {
    const { firstNumber, secondNumber, operator } = this.state
    if(firstNumber && !secondNumber && !operator) {
      let newFirstNum = firstNumber.slice(0, firstNumber.length - 1)
      this.setState({ firstNumber: newFirstNum })
    } else if(firstNumber && operator && !secondNumber) {
      this.setState({ operator: '' })
    } else if(firstNumber && operator && secondNumber) {
      let newSecondNum = secondNumber.slice(0, secondNumber.length - 1)
      this.setState({ secondNumber: newSecondNum })
    }
  }

  clearButton = () => {
    this.setState({
      firstNumber: '',
      secondNumber: '',
      operator: '',
      finalCalculation: ''
    })
  }

  sqrtButton = () => {
    this.setState({ 
      finalCalculation: Math.sqrt(this.state.firstNumber), 
      firstNumber: Math.sqrt(this.state.firstNumber)
    })
  }

  squareButton = () => {
    this.setState({
       finalCalculation: Math.pow(this.state.firstNumber, 2),
       firstNumber: Math.pow(this.state.firstNumber, 2) 
      })
  }


  render() {
    return (
      <div className='tc'>
        <div className='displayCalculation tc'>
          {
            this.state.finalCalculation ? <p>{this.state.finalCalculation}</p> : this.state.operator ? <p>{this.state.secondNumber}</p> : <p>{this.state.firstNumber}</p>
          }  
        </div>
        <br />
        <div>
          <button onClick={this.clearButton}>Clear</button>
          <button onClick={this.delbutton}>Del</button>
          <button onClick={this.sqrtButton}>√</button>
          <button onClick={this.squareButton}>x²</button>
          <br />
          <button value={7} onClick={this.takeNumber}>7</button>
          <button value={8} onClick={this.takeNumber}>8</button>
          <button value={9} onClick={this.takeNumber}>9</button>
          <button value={'/'} onClick={this.takeOperator}>/</button>
          <br />
          <button value={4} onClick={this.takeNumber}>4</button>
          <button value={5} onClick={this.takeNumber}>5</button>
          <button value={6} onClick={this.takeNumber}>6</button>
          <button value={'*'} onClick={this.takeOperator}>*</button>
          <br />
          <button value={1} onClick={this.takeNumber}>1</button>
          <button value={2} onClick={this.takeNumber}>2</button>
          <button value={3} onClick={this.takeNumber}>3</button>
          <button value={'+'} onClick={this.takeOperator}>+</button>
          <br />
          <button onClick={this.dotButton}>.</button>
          <button value={0} onClick={this.takeNumber}>0</button>
          <button onClick={this.answer}>=</button>
          <button value={'-'} onClick={this.takeOperator}>-</button>
        </div>
      </div>
    );
  } 
}

export default App;
