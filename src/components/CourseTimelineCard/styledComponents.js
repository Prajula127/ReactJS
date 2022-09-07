import styled from 'styled-components/macro'

export const CourseTimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const CourseContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CourseTitle = styled.h1`
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

export const CourseListContainer = styled.ul`
  display: flex;
  padding-left: 0px;
  flex-wrap: wrap;
`

export const Lists = styled.li`
  list-style-type: none;
  margin-right: 10px;
  margin-bottom: 10px;
`
export const Names = styled.p`
  background-color: #1e293b3b;
  color: #171f46;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 600;
  padding: 8px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
