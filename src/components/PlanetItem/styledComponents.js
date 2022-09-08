import styled from 'styled-components/macro'

export const PlanetItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding: 10px;
`
export const Image = styled.img`
  width: 400px;
  height: 300px;
  @media screen (max-width: 767px) {
    width: 250px;
    height: 250px;
  }
`
export const PlanetName = styled.h1`
  color: #f8fafc;
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: bold;
  @media screen (max-width: 767px) {
    font-size: 22px;
  }
`
export const Desc = styled.p`
  color: #f1f5f9;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: normal;
  text-align: center;
  max-width: 800px;
  @media screen (max-width: 767px) {
    font-size: 16px;
  }
`
