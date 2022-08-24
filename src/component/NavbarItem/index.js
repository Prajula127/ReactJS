import './index.css'

const NavbarItems = props => {
  const {score, timer} = props

  return (
    <nav className="navbar">
      <img
        className="logo"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
      />
      <ul className="score-container">
        <li className="score-item">
          <p className="scores">
            Score: <span className="score">{score}</span>
          </p>
        </li>
        <li className="score-item">
          <img
            className="time"
            alt="timer"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          />
          <p className="score">{timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}
export default NavbarItems
