// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isEmoji: false}

  clickOnEmoji = () => {
    this.setState(prevState => ({
      isEmoji: !prevState.isEmoji,
    }))
  }

  renderFeedback = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="feedback-card">
        <h1 className="feedback-heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="feedback-list-container">
          {emojis.map(each => (
            <li className="emoji-lists" key={each.id}>
              <button
                className="buttons"
                type="button"
                onClick={this.clickOnEmoji}
              >
                <img className="image" alt={each.name} src={each.imageUrl} />
              </button>
              <p className="desc">{each.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="feedback-card">
        <img className="love" alt="love emoji" src={loveEmojiUrl} />
        <h1 className="thank">Thank You!</h1>
        <p className="thank-desc">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isEmoji} = this.state

    return (
      <div className="feedback-container">
        {isEmoji ? this.renderThankYou() : this.renderFeedback()}
      </div>
    )
  }
}
export default Feedback
