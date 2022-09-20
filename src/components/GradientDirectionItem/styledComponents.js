// Style your elements here
import styled from 'styled-components'

export const Lists = styled.li`
  list-style-type: none;
  margin: 10px;
`
export const CustomButton = styled.button`
  opacity: ${props => (props.outline === true ? 1 : 0.5)};
  font-size: 18px;
  font-family: 'Roboto';
  width: 100px;
  height: 45px;
  padding: 8px 16px 8px 16px;
  border-radius: 8px;
  border-width: 0px;
  cursor: pointer;
`
