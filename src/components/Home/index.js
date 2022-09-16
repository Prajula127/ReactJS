// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const content = isDarkTheme ? 'dark-content' : 'content'
      const homeContainer = isDarkTheme
        ? 'home-dark-container'
        : 'home-container'

      return (
        <div className={homeContainer}>
          <img className="image" alt="home" src={homeImage} />
          <h1 className={content}>Home</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
