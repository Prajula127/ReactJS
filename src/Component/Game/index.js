import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import GameLists from '../GameLists'
import GameResult from '../GameResult'

import './index.css'

class Game extends Component {
  state = {
    score: 0,
    myChoice: {},
    opponentChoice: {},
    showResults: false,
    resultMessage: '',
  }

  clickMyChoice = (id, image) => {
    const {choicesList} = this.props
    const randomNumber = Math.floor(Math.random() * choicesList.length)

    if (id === 'PAPER' && choicesList[randomNumber].id === 'ROCK') {
      this.setState(prevState => ({
        showResults: true,
        myChoice: [id, image],
        opponentChoice: choicesList[randomNumber],
        resultMessage: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else if (id === 'SCISSORS' && choicesList[randomNumber].id === 'ROCK') {
      this.setState(prevState => ({
        showResults: true,
        myChoice: [id, image],
        opponentChoice: choicesList[randomNumber],
        resultMessage: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    } else if (id === 'ROCK' && choicesList[randomNumber].id === 'PAPER') {
      this.setState(prevState => ({
        showResults: true,
        myChoice: [id, image],
        opponentChoice: choicesList[randomNumber],
        resultMessage: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    } else if (id === 'SCISSORS' && choicesList[randomNumber].id === 'PAPER') {
      this.setState(prevState => ({
        showResults: true,
        myChoice: [id, image],
        opponentChoice: choicesList[randomNumber],
        resultMessage: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else if (id === 'PAPER' && choicesList[randomNumber].id === 'SCISSORS') {
      this.setState(prevState => ({
        showResults: true,
        myChoice: [id, image],
        opponentChoice: choicesList[randomNumber],
        resultMessage: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    } else if (id === 'ROCK' && choicesList[randomNumber].id === 'SCISSORS') {
      this.setState(prevState => ({
        showResults: true,
        myChoice: [id, image],
        opponentChoice: choicesList[randomNumber],
        resultMessage: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else {
      this.setState({
        showResults: true,
        myChoice: [id, image],
        opponentChoice: choicesList[randomNumber],
        resultMessage: 'IT IS DRAW',
      })
    }
  }

  clickPlayAgain = () => {
    this.setState({showResults: false})
  }

  getGameResult = () => {
    const {myChoice, opponentChoice, resultMessage} = this.state
    return (
      <GameResult
        my={myChoice}
        opponent={opponentChoice}
        msg={resultMessage}
        playAgain={this.clickPlayAgain}
      />
    )
  }

  getGameImages = () => {
    const {choicesList} = this.props

    return (
      <ul className="game-lists-container">
        {choicesList.map(each => (
          <GameLists key={each.id} choices={each} choice={this.clickMyChoice} />
        ))}
      </ul>
    )
  }

  render() {
    const {score, showResults} = this.state
    return (
      <div className="app-container">
        <div className="game-container">
          <div className="game-score-container">
            <div className="game-lists">
              <h1 className="heading">
                ROCK
                <br />
                PAPER
                <br />
                SCISSORS
              </h1>
            </div>
            <div className="score-container">
              <p className="score">Score</p>
              <p className="game-score">{score}</p>
            </div>
          </div>
          {showResults ? this.getGameResult() : this.getGameImages()}
        </div>
        <div className="popup-container">
          <Popup
            modal
            trigger={
              <button className="pop" type="button">
                RULES
              </button>
            }
          >
            {close => (
              <div className="rules-container">
                <button className="close" type="button" onClick={() => close()}>
                  <RiCloseLine />
                </button>
                <img
                  className="rules"
                  alt="rules"
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                />
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}
export default Game
