// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  // randomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const {count} = this.state
    const randoms = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randoms}))
  }

  render() {
    const {count} = this.state
    const number = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="even-odd-container">
        <div className="even-odd-card">
          <h1 className="count">Count {count}</h1>
          <p className="desc">Count is {number}</p>
          <button
            className="increment"
            type="button"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
