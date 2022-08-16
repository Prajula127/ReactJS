import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  question = event => {
    this.setState({activeId: event.target.value})
  }

  getAnswer = () => {
    const {activeId} = this.state
    const countryAnswer = countryAndCapitalsList.find(
      each => each.id === activeId,
    )

    return countryAnswer.country
  }

  render() {
    const {activeId} = this.state
    const answer = this.getAnswer(activeId)

    return (
      <div className="country-capital-container">
        <div className="country-capital-card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select">
            <select
              className="capital"
              onChange={this.question}
              value={activeId}
            >
              {countryAndCapitalsList.map(each => (
                <option className="option" key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{answer}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
