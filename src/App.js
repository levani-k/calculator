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


  takeNumber0 = () => {
    this.setState({ finalCalculation: '' })
    if(!this.state.operator) {
      if(this.state.firstNumber !== '0')
      this.setState(prevState => {
        return {
          firstNumber: prevState.firstNumber + '0'
        }
      })
    } else {
      this.setState(prevState => {
        return {
          secondNumber: prevState.secondNumber + '0'
        }
      })
    }
  }

  takeNumber1 = () => {
    this.setState({ finalCalculation: '' })
    if(!this.state.operator) {
      this.setState(prevState => {
        return {
          firstNumber: prevState.firstNumber + '1'
        }
      })
    } else {
      this.setState(prevState => {
        return {
          secondNumber: prevState.secondNumber + '1'
        }
      })
    }
  }

  takeNumber2 = () => {
    this.setState({ finalCalculation: '' })
    if(!this.state.operator) {
      this.setState(prevState => {
        return {
          firstNumber: prevState.firstNumber + '2'
        }
      })
    } else {
      this.setState(prevState => {
        return {
          secondNumber: prevState.secondNumber + '2'
        }
      })
    }
  }

  takeNumber3 = () => {
    this.setState({ finalCalculation: '' })
    if(!this.state.operator) {
      this.setState(prevState => {
        return {
          firstNumber: prevState.firstNumber + '3'
        }
      })
    } else {
      this.setState(prevState => {
        return {
          secondNumber: prevState.secondNumber + '3'
        }
      })
    }
  }

  takeNumber4 = () => {
    this.setState({ finalCalculation: '' })
    if(!this.state.operator) {
      this.setState(prevState => {
        return {
          firstNumber: prevState.firstNumber + '4'
        }
      })
    } else {
      this.setState(prevState => {
        return {
          secondNumber: prevState.secondNumber + '4'
        }
      })
    }
  }

  takeNumber5 = () => {
    this.setState({ finalCalculation: '' })
    if(!this.state.operator) {
      this.setState(prevState => {
        return {
          firstNumber: prevState.firstNumber + '5'
        }
      })
    } else {
      this.setState(prevState => {
        return {
          secondNumber: prevState.secondNumber + '5'
        }
      })
    }
  }

  takeNumber6 = () => {
    this.setState({ finalCalculation: '' })
    if(!this.state.operator) {
      this.setState(prevState => {
        return {
          firstNumber: prevState.firstNumber + '6'
        }
      })
    } else {
      this.setState(prevState => {
        return {
          secondNumber: prevState.secondNumber + '6'
        }
      })
    }
  }

  takeNumber7 = () => {
    this.setState({ finalCalculation: '' })
    if(!this.state.operator) {
      this.setState(prevState => {
        return {
          firstNumber: prevState.firstNumber + '7'
        }
      })
    } else {
      this.setState(prevState => {
        return {
          secondNumber: prevState.secondNumber + '7'
        }
      })
    }
  }

  takeNumber8 = () => {
    this.setState({ finalCalculation: '' })
    if(!this.state.operator) {
      this.setState(prevState => {
        return {
          firstNumber: prevState.firstNumber + '8'
        }
      })
    } else {
      this.setState(prevState => {
        return {
          secondNumber: prevState.secondNumber + '8'
        }
      })
    }
  }

  takeNumber9 = () => {
    this.setState({ finalCalculation: '' })
    if(!this.state.operator) {
      this.setState(prevState => {
        return {
          firstNumber: prevState.firstNumber + '9'
        }
      })
    } else {
      this.setState(prevState => {
        return {
          secondNumber: prevState.secondNumber + '9'
        }
      }) 
    }
  }

  MultiplicarionOperator = () => {
    this.setState({ operator: '*' })
  }

  plusOperator = () => {
    this.setState({ operator: '+' })
  }

  minusOperator = () => {
    this.setState({ operator: '-' })
  }

  divisionOperator = () => {
    this.setState({ operator: '/' })
  }


  answer = () => {
    const { operator } = this.state
    let firstNumber = Number(this.state.firstNumber)
    let secondNumber = Number(this.state.secondNumber)
    if(operator === '*') {
      this.setState({ 
        finalCalculation: firstNumber * secondNumber,
        firstNumber: '',
        secondNumber: '',
        operator: ''
      })
    } else if(operator === '/') {
      this.setState({ 
        finalCalculation: firstNumber / secondNumber,
        firstNumber: '',
        secondNumber: '',
        operator: ''
      })
    } else if(operator === '+') {
      this.setState({ 
        finalCalculation: firstNumber + secondNumber,
        firstNumber: '',
        secondNumber: '',
        operator: ''
      })
    } else if(operator === '-') {
      this.setState({ 
        finalCalculation: firstNumber - secondNumber,
        firstNumber: '',
        secondNumber: '',
        operator: ''
      })
    }
  }

  dotButton = () => {
    if(!this.state.operator) {
      this.setState(prevState => {
        return {
          firstNumber: prevState.firstNumber + '.'
        }
      })
    } else {
      this.setState(prevState => {
        return {
          secondNumber: prevState.secondNumber + '.'
        }
      })
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
    this.setState({ finalCalculation: Math.sqrt(this.state.firstNumber) })
  }

  squareButton = () => {
    this.setState({ finalCalculation: Math.pow(this.state.firstNumber, 2) })
  }


  render() {
    return (
      <div className='tc'>
        <div className='displayCalculation'>
          {
            this.state.finalCalculation ? <p>{this.state.finalCalculation}</p> : this.state.operator ? <p>{this.state.secondNumber}</p> : <p>{this.state.firstNumber}</p>
          }  
        </div>
        <br />
        <button onClick={this.clearButton}>Clear</button>
        <button onClick={this.delbutton}>Del</button>
        <button onClick={this.sqrtButton}>√</button>
        <button onClick={this.squareButton}>x²</button>
        <br />
        <button onClick={this.takeNumber7}>7</button>
        <button onClick={this.takeNumber8}>8</button>
        <button onClick={this.takeNumber9}>9</button>
        <button onClick={this.divisionOperator}>/</button>
        <br />
        <button onClick={this.takeNumber4}>4</button>
        <button onClick={this.takeNumber5}>5</button>
        <button onClick={this.takeNumber6}>6</button>
        <button onClick={this.MultiplicarionOperator}>*</button>
        <br />
        <button onClick={this.takeNumber1}>1</button>
        <button onClick={this.takeNumber2}>2</button>
        <button onClick={this.takeNumber3}>3</button>
        <button onClick={this.plusOperator}>+</button>
        <br />
        <button onClick={this.dotButton}>.</button>
        <button onClick={this.takeNumber0}>0</button>
        <button onClick={this.answer}>=</button>
        <button onClick={this.minusOperator}>-</button>

      </div>
    );
  }
  
}

export default App;
