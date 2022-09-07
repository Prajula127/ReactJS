// Write your code here
import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import {
  AppContainer,
  CcbpTimelineContainer,
  HeadingContainer,
  MyJourney,
  Ccbp,
} from './styledComponents'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderItemsList = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard projects={item} />
    }
    return <CourseTimelineCard course={item} />
  }

  return (
    <AppContainer>
      <CcbpTimelineContainer>
        <HeadingContainer>
          <MyJourney>
            MY JOURNEY OF <br />
            <br />
            <Ccbp>CCBP 4.0</Ccbp>
          </MyJourney>
        </HeadingContainer>
        <Chrono
          theme={{
            secondary: 'white',
            fontSize: 20,
            fontFamily: 'Roboto',
            fontWeight: 600,
          }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => renderItemsList(eachItem))}
        </Chrono>
      </CcbpTimelineContainer>
    </AppContainer>
  )
}
export default TimelineView
