import {Component} from 'react'

import {
  AppContainer,
  FormContainer,
  LabelContainer,
  Label,
  Input,
  Generate,
  ApplyImageContainer,
  Top,
  Bottom,
  Select,
  Option,
  MemeContainer,
  Meme,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    fontSizes: '',
    imageUrl: '',
    topText: '',
    bottomText: '',
    generate: false,
  }

  applyImage = event => {
    this.setState({imageUrl: event.target.value})
  }

  onTopText = event => {
    this.setState({topText: event.target.value})
  }

  onBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  selectFontSize = event => {
    this.setState({fontSizes: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.setState({generate: true})
  }

  render() {
    const {fontSizes, imageUrl, topText, bottomText, generate} = this.state
    // const fontSize = parseInt(fontSizes)
    return (
      <AppContainer>
        <MemeContainer>
          <FormContainer onSubmit={this.onSubmitForm}>
            <Meme>Meme Generator</Meme>
            <LabelContainer>
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                placeholder="Enter the Image URL"
                type="text"
                value={imageUrl}
                onChange={this.applyImage}
              />
            </LabelContainer>
            <LabelContainer>
              <Label htmlFor="top">Top Text</Label>
              <Input
                id="top"
                placeholder="Enter the Top Text"
                type="text"
                value={topText}
                onChange={this.onTopText}
              />
            </LabelContainer>
            <LabelContainer>
              <Label htmlFor="bottom">Bottom Text</Label>
              <Input
                id="bottom"
                placeholder="Enter the Bottom Text"
                type="text"
                value={bottomText}
                onChange={this.onBottomText}
              />
            </LabelContainer>
            <LabelContainer>
              <Label htmlFor="font">Font Size</Label>

              <Select
                onChange={this.selectFontSize}
                value={fontSizes}
                id="font"
              >
                {fontSizesOptionsList.map(each => (
                  <Option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </Option>
                ))}
              </Select>
            </LabelContainer>
            <Generate type="submit">Generate</Generate>
          </FormContainer>
          {generate && (
            <ApplyImageContainer image={imageUrl} data-testid="meme">
              <Top size={fontSizes}>{topText}</Top>
              <Bottom size={fontSizes}>{bottomText}</Bottom>
            </ApplyImageContainer>
          )}
        </MemeContainer>
      </AppContainer>
    )
  }
}
export default MemeGenerator
