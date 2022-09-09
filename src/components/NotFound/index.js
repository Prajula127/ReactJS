// Write your code here
import {HomeContainer, Image, Heading, Desc} from './styledComponent'

const NotFound = () => (
  <HomeContainer>
    <Image
      alt="not found"
      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
    />
    <Heading>Lost Your Way?</Heading>
    <br />
    <Desc>
      Sorry, we cannot find that page. You will find lots to explore on the home
      page
    </Desc>
  </HomeContainer>
)
export default NotFound
