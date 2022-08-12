// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  getSubscribe = () => {
    const {isSubscribe} = this.state
    return isSubscribe ? 'Subscribe' : 'Subscribed'
  }

  render() {
    const buttonText = this.getSubscribe()

    return (
      <div className="welcome-container">
        <h1 className="heading">Welcome</h1>
        <p className="desc">Thank you! Happy Learning</p>
        <button className="button" type="button" onClick={this.onSubscribe}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
