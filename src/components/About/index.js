// Write your code here

import './index.css'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const content = isDarkTheme ? 'dark-content' : 'content'
      const homeContainer = isDarkTheme
        ? 'home-dark-container'
        : 'home-container'

      return (
        <div className={homeContainer}>
          <img className="about" alt="about" src={homeImage} />
          <h1 className={content}>About</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
