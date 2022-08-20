/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import WinOrLossCard from '../WinOrLoseCard'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojiList: [], isGamePresent: true, topScore: 0}

  resetGame = () => {
    this.setState({clickedEmojiList: [], isGamePresent: true})
  }

  scoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isWon = emojisList.length === clickedEmojiList.length
    return (
      <WinOrLossCard
        isWon={isWon}
        playAgain={this.resetGame}
        score={clickedEmojiList.length}
      />
    )
  }

  finishGameAndTopScore = currentScore => {
    const {topScore} = this.state
    let newScore = topScore
    if (currentScore > topScore) {
      newScore = currentScore
    }
    this.setState({topScore: newScore, isGamePresent: false})
  }

  clickEmojis = id => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isEmojiPresent = clickedEmojiList.includes(id)
    const emojiLength = clickedEmojiList.length
    if (isEmojiPresent) {
      this.finishGameAndTopScore(emojiLength)
    } else {
      if (emojisList.length - 1 === emojiLength) {
        this.finishGameAndTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  emojiCards = () => {
    const emojis = this.shuffledEmojisList()

    return (
      <ul className="emoji-lists">
        {emojis.map(each => (
          <EmojiCard items={each} key={each.id} clickEmoji={this.clickEmojis} />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojiList, isGamePresent, topScore} = this.state
    return (
      <div className="app-container">
        <NavBar
          score={clickedEmojiList.length}
          topScore={topScore}
          game={isGamePresent}
        />
        <div className="emoji-card-container">
          <div className="emojis-card">
            {isGamePresent ? this.emojiCards() : this.scoreCard()}
          </div>
        </div>
      </div>
    )
  }
}
export default EmojiGame
