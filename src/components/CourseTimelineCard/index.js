// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import {
  CourseTimelineContainer,
  CourseContainer,
  CourseTitle,
  DurationContainer,
  Duration,
  Description,
  CourseListContainer,
  Lists,
  Names,
} from './styledComponents'

import './index.css'

const CourseTimelineCard = props => {
  const {course} = props
  const {courseTitle, description, duration, tagsList} = course

  return (
    <CourseTimelineContainer>
      <CourseContainer>
        <CourseTitle>{courseTitle}</CourseTitle>
        <DurationContainer>
          <AiFillClockCircle className="icon" />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </CourseContainer>
      <Description>{description}</Description>
      <CourseListContainer>
        {tagsList.map(each => (
          <Lists key={each.id}>
            <Names>{each.name}</Names>
          </Lists>
        ))}
      </CourseListContainer>
    </CourseTimelineContainer>
  )
}
export default CourseTimelineCard
