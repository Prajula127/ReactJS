import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientContainer,
  Heading,
  Choose,
  UnOrder,
  Pick,
  InputContainer,
  Desc,
  Input,
  Generate,
  ColorContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    gradient: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  applyColor = () => {
    const {color1, color2, gradient} = this.state
    this.setState({gradientValue: `to ${gradient},${color1},${color2}`})
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  onGradientDirection = value => {
    this.setState({gradient: value})
  }

  render() {
    const {gradientValue, color1, color2, gradient} = this.state
    // const applyColor1 = apply ? color1 : color1
    // const applyColor2 = apply ? color2 : color2
    // const applyGradient = apply ? gradient : ''

    return (
      <GradientContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Choose>Choose Direction</Choose>
        <UnOrder>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              directionList={each}
              direction={this.onGradientDirection}
              active={each.value === gradient}
            />
          ))}
        </UnOrder>
        <Pick>Pick the Colors</Pick>

        <ColorContainer>
          <InputContainer>
            <Desc>{color1}</Desc>
            <Input
              type="color"
              value={color1}
              onChange={this.onChangeColor1}
              solid
            />
          </InputContainer>
          <InputContainer>
            <Desc>{color2}</Desc>
            <Input type="color" value={color2} onChange={this.onChangeColor2} />
          </InputContainer>
        </ColorContainer>
        <Generate type="button" onClick={this.applyColor}>
          Generate
        </Generate>
      </GradientContainer>
    )
  }
}
export default GradientGenerator
