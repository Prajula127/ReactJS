// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
display:flex;
justify-content:center;
min-height:100vh;
padding 30px;
`
export const MemeContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 40%;
`
export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`
export const Label = styled.label`
  color: #5a7184;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
`
export const Input = styled.input`
  outline: none;
  height: 45px;
  width: 80%;
  padding: 8px 16px 8px 16px;
  font-size: 16px;
  border: 1px solid #d7dfe9;
  border-radius: 6px;
`
export const Generate = styled.button`
  background-color: #0b69ff;
  font-size: 15px;
  font-weight: 600;
  border-width: 0px;
  border-radius: 8px;
  width: 30%;
  height: 45px;
  padding: 12px;
  cursor: pointer;
  color: #ffffff;
  font-family: 'Roboto';
`
export const ApplyImageContainer = styled.div`
  width: 40%;
  height: 600px;
  background-size: cover;
  background-image: url(${props => props.image});
  display: flex;
  flex-direction: column;
`
export const Top = styled.p`
  font-size: ${props => props.size}px;
  font-family: 'Roboto';
  color: #ffffff;
  align-self: flex-start;
  margin: auto;
  font-weight: bold;
`
export const Bottom = styled(Top)`
  align-self: flex-end;
  font-size: ${props => props.size}px;
`
export const Select = styled.select`
  height: 45px;
  width: 80%;
  padding: 8px 16px 8px 16px;
  font-size: 16px;
  border: 1px solid #d7dfe9;
  border-radius: 6px;
  outline: none;
`
export const Option = styled.option``

export const Meme = styled.h1`
  font-size: 35px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #35469c;
`

//  #35469c
// Hex: #7e858e
// Hex: #5a7184
// Hex: #ffffff
// Hex: #d7dfe9
// Hex: #1e293b
// Hex: #0b69ff
