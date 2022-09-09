import styled from 'styled-components/macro'

export const HamburgerMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 70%;
  padding-top: 20px;
  padding-bottom: 20px;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const UnorderList = styled.ul`
  padding-left: 0px;
`
export const MenuContainer = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
`
export const Home = styled.p`
  color: #616e7c;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto';
  background-color: transparent;
  border: none;
  margin-left: 10px;
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #dcdcdc;
`
export const Image = styled.img`
  width: 60px;
  height: 60px;
`
