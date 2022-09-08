// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import {AppContainer, PlanetsContainer, Heading} from './styledComponents'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dot: true,
    slidersToShow: 1,
    slidersToScroll: 1,
  }

  return (
    <AppContainer testid="planets">
      <PlanetsContainer>
        <Heading>PLANETS</Heading>

        <Slider {...settings}>
          {planetsList.map(each => (
            <PlanetItem key={each.id} planetItem={each} />
          ))}
        </Slider>
      </PlanetsContainer>
    </AppContainer>
  )
}
export default PlanetsSlider
