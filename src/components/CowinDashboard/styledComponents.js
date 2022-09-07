import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  background-color: #161625;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 1000px;
`

export const FailImage = styled.img`
  width: 450px;
`

export const Fail = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-family: 'Bree Serif';
  font-weight: 600;
`

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AppLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`

export const LogoText = styled.p`
  color: #2cc6c6;
  font-size: 26px;
  font-family: 'Roboto';
  font-weight: 600;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: 500;
`
