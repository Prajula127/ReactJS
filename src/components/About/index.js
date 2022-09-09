// Write your code here
import {
  HomeContainer,
  AboutLgContainer,
  AboutSmContainer,
  ImageContainer,
} from './styledComponent'

import './index.css'
import Header from '../Header'

const About = () => (
  <HomeContainer>
    <Header />
    <ImageContainer>
      <AboutLgContainer
        alt="about"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
      />

      <AboutSmContainer
        alt="about"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
      />
    </ImageContainer>
  </HomeContainer>
)
export default About
