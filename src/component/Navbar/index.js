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
        <li className="score-list">
          <p className="score">
            Score: <span className="scores">{score}</span>
          </p>
        </li>
        <li className="score-list">
          <img
            className="time"
            alt="timer"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          />
          <p className="scores"> {timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}
export default NavbarItems
