// Write your code here

import './index.css'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeContainer = isDarkTheme
        ? 'home-dark-container'
        : 'home-container'
      const text = isDarkTheme ? 'dark-content' : 'content'
      const desc = isDarkTheme ? 'dark' : 'light'

      return (
        <div className={homeContainer}>
          <img
            className="image"
            alt="not found"
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          />
          <h1 className={text}>Lost Your Way?</h1>
          <p className={desc}>We cannot seem to find the page.</p>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
