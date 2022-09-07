// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import {
  ProjectsTimelineContainer,
  ProjectImage,
  ProjectContainer,
  ProjectsTitle,
  DurationContainer,
  Duration,
  Description,
  VisitLink,
} from './styledComponents'

import './index.css'

const ProjectTimelineCard = props => {
  const {projects} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = projects

  return (
    <ProjectsTimelineContainer>
      <ProjectImage alt="project" src={imageUrl} />
      <ProjectContainer>
        <ProjectsTitle>{projectTitle}</ProjectsTitle>
        <DurationContainer>
          <AiFillCalendar className="icon" />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </ProjectContainer>
      <Description>{description}</Description>
      <VisitLink href={projectUrl}>Visit</VisitLink>
    </ProjectsTimelineContainer>
  )
}
export default ProjectTimelineCard
