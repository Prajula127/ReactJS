// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isShow: false}

  clickAnswer = () => {
    this.setState(prevState => ({isShow: !prevState.isShow}))
  }

  getAnswer = () => {
    const {items} = this.props

    return (
      <div>
        <hr className="line" />
        <p className="ans">{items.answerText}</p>
      </div>
    )
  }

  render() {
    const {items} = this.props
    const {questionText} = items
    const {isShow} = this.state
    const showOrHideImg = isShow
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altImg = isShow ? 'minus' : 'plus'
    return (
      <li className="lists-items">
        <div className="answers">
          <div className="faqs-container">
            <h1 className="question">{questionText}</h1>
            <button className="button" type="button" onClick={this.clickAnswer}>
              <img className="image" alt={altImg} src={showOrHideImg} />
            </button>
          </div>
          {isShow && this.getAnswer()}
        </div>
      </li>
    )
  }
}
export default FaqItem
