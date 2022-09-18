import {Link} from 'react-router-dom'
import {BsBriefcaseFill} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'

import './index.css'

const SimilarJobs = props => {
  const {similarJobs, detailsJob} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    id,
    location,
    rating,
    title,
  } = similarJobs

  const clickJob = () => {
    detailsJob(id)
  }

  return (
    <Link className="links" to={`/jobs/${id}`} onClick={clickJob}>
      <li className="jobs-details-container">
        <div className="company-logo-container">
          <img
            className="company-logo logos"
            alt="similar job company logo"
            src={companyLogoUrl}
          />
          <div className="company-info-container">
            <h1 className="company-role role">{title}</h1>
            <div className="company-rating-container">
              <AiFillStar className="star-icons rating-stars" />
              <p className="company-rating job-rating">{rating}</p>
            </div>
          </div>
        </div>
        <h1 className="job-list-description">Description</h1>
        <p className="job-list-desc">{jobDescription}</p>
        <div className="company-salary-container">
          <div className="company-location-container">
            <MdLocationOn className="icon icon2" />
            <p className="info infos">{location}</p>
          </div>
          <div className="company-location-container">
            <BsBriefcaseFill className="icon icon2" />
            <p className="info infos">{employmentType}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default SimilarJobs
