// Style your elements here

import styled from 'styled-components'

export const GradientContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #ffffff;
  font-family: 'Roboto';
`

export const Heading = styled.h1`
  font-size: 36px;

  font-weight: 600;
`
export const Choose = styled.p`
  font-size: 22px;
`
export const UnOrder = styled.ul`
  display: flex;
  padding-left: 0px;
`
export const Pick = styled(Choose)`
  //   font-family: 'Roboto';
`
export const ColorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Desc = styled.p`
  font-size: 18px;
`
export const Input = styled.input`
  background-color: transparent;
  width: 80px;
  height: 45px;
  padding-left: 0px;
  border: none;
  outline: none;
`
export const Generate = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  width: 120px;
  height: 45px;
  padding: 8px 16px 8px 16px;
  cursor: pointer;
  border-width: 0px;
  border-radius: 8px;
  margin-top: 30px;
  font-size: 18px;
  font-weight: 600;
`
