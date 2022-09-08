import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/planets-app/planets-bg-img.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const PlanetsContainer = styled.div`
  width: 60%;
`
export const Heading = styled.h1`
  color: #05acff;
  font-size: 45px;
  font-family: 'Roboto';
  text-align: center;
  font-weight: bold;
  @media screen (max-width: 767px) {
    font-size: 30px;
  }
`
