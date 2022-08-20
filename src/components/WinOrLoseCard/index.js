// Write your code here.
import './index.css'

const won = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loss = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WinOrLossCard = props => {
  const {isWon, playAgain, score} = props
  const imageUrl = isWon ? won : loss
  const wonOrLossHeading = isWon ? 'You Won' : 'You Lose'
  const wonOrLossText = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-loss-card">
      <div className="win-or-loss">
        <h1 className="win-loss">{wonOrLossHeading}</h1>
        <p className="scores">{wonOrLossText}</p>
        <p className="score">{score}/12</p>
        <button className="score-button" type="button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img className="win-or-lose-image" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLossCard
