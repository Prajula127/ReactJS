import styled from 'styled-components/macro'

export const ProjectsTimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const ProjectImage = styled.img`
  width: 100%;
`
export const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ProjectsTitle = styled.h1`
  color: #171f46;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const DurationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Duration = styled.p`
  color: #171f46;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`
export const Description = styled.p`
  color: #171f46;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: normal;
  margin-top: 0px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`
export const VisitLink = styled.a`
  color: #0967d2;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`
