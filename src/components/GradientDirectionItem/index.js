// Write your code here
import {Lists, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionList, direction, active} = props
  const {value, displayText} = directionList

  const clickDirection = () => {
    direction(value)
  }

  return (
    <Lists>
      <CustomButton type="button" onClick={clickDirection} outline={active}>
        {displayText}
      </CustomButton>
    </Lists>
  )
}
export default GradientDirectionItem
