import './index.css'

const GameOver = props => {
  const {score, gameOver} = props

  return (
    <div className="game-over-container">
      <img
        className="trophy"
        alt="trophy"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
      />
      <p className="your">Your Score</p>
      <p className="final">{score}</p>
      <button className="play" type="button" onClick={gameOver}>
        <img
          className="reset"
          alt="reset"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}
export default GameOver
