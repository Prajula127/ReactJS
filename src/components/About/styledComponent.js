import styled from 'styled-components/macro'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: Center;
`
export const AboutLgContainer = styled.img`
  display: flex;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const AboutSmContainer = styled.img`
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
  }
`
