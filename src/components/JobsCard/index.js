import {BsBriefcaseFill} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {Link} from 'react-router-dom'

import './index.css'

const JobsCard = props => {
  const {jobsList} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    id,
    title,
  } = jobsList
  //   console.log(jobsList)
  return (
    <Link to={`/jobs/${id}`} className="links">
      <li className="jobs-detail-container">
        <div className="company-logo-container">
          <img
            className="company-logo"
            alt="company logo"
            src={companyLogoUrl}
          />
          <div className="company-info-container">
            <h1 className="company-role">{title}</h1>
            <div className="company-rating-container">
              <AiFillStar className="star-icons" />
              <p className="company-rating">{rating}</p>
            </div>
          </div>
        </div>
        <div className="company-more-info-container">
          <div className="company-salary-container">
            <div className="company-location-container">
              <MdLocationOn className="icon" />
              <p className="info">{location}</p>
            </div>
            <div className="company-location-container">
              <BsBriefcaseFill className="icon" />
              <p className="info">{employmentType}</p>
            </div>
          </div>
          <h1 className="employee-salary">{packagePerAnnum}</h1>
        </div>
        <hr className="line" />
        <h1 className="job-description">Description</h1>
        <p className="job-desc">{jobDescription}</p>
      </li>
    </Link>
  )
}
export default JobsCard
