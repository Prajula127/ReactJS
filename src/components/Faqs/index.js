// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="app-container">
        <div className="faq-container">
          <h1 className="heading">FAQs</h1>
          <ul className="lists-container">
            {faqsList.map(each => (
              <FaqItem key={each.id} items={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
