// Write your code here
import {
  HomeContainer,
  HomeLgContainer,
  HomeSmContainer,
  ImageContainer,
} from './styledComponent'

import './index.css'
import Header from '../Header'

const Home = () => (
  <HomeContainer>
    <Header />
    <ImageContainer>
      <HomeLgContainer
        alt="home"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
      />

      <HomeSmContainer
        alt="home"
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
      />
    </ImageContainer>
  </HomeContainer>
)
export default Home
