// Write your code here
import {PlanetItemContainer, Image, PlanetName, Desc} from './styledComponents'

import './index.css'

const PlanetItem = props => {
  const {planetItem} = props
  const {name, imageUrl, description} = planetItem

  return (
    <PlanetItemContainer>
      <Image alt={`planet ${name}`} src={imageUrl} />
      <PlanetName>{name}</PlanetName>
      <Desc>{description}</Desc>
    </PlanetItemContainer>
  )
}
export default PlanetItem
