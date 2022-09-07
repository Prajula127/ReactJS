import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const CcbpTimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`
export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
`
export const MyJourney = styled.h1`
  color: #171f46;
  font-size: 25px;
  font-weight: bold;
  font-family: 'Roboto';
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const Ccbp = styled.span`
  color: #2b237c;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto';
  margin-left: 24px;
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`
