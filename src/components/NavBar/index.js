// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, game} = props

  return (
    <div className="nav-bar-container">
      <div className="logo-container">
        <img
          className="logo"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="logo-name">Emoji Game</h1>
      </div>
      {game && (
        <div className="logo-container">
          <p className="logo-name name">Score: {score}</p>
          <p className="logo-name name">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}
export default NavBar
