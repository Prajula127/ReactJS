import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FiExternalLink} from 'react-icons/fi'
import Cookies from 'js-cookie'
import {Link, Redirect} from 'react-router-dom'

import './index.css'
import SimilarJobs from '../SimilarJobs'
import Header from '../Header'

const apiStatusUpdate = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class JobDetails extends Component {
  state = {jobDetailList: {}, apiStatus: apiStatusUpdate.initial, id: ''}

  componentDidMount() {
    this.getJobDetails()
  }

  // eslint-disable-next-line no-unused-vars
  getJobDetails = async () => {
    this.setState({apiStatus: apiStatusUpdate.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState(prevState => ({id: prevState.id}))

    console.log(id)

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/jobs/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updateJobDetails = {
        jobDetails: {
          companyLogoUrl: data.job_details.company_logo_url,
          companyWebsiteUrl: data.job_details.company_website_url,
          employmentType: data.job_details.employment_type,
          id: data.job_details.id,
          jobDescription: data.job_details.job_description,
          skills: data.job_details.skills.map(each => ({
            imageUrl: each.image_url,
            name: each.name,
          })),
          lifeAtCompany: {
            description: data.job_details.life_at_company.description,
            imageUrl: data.job_details.life_at_company.image_url,
          },
          location: data.job_details.location,
          packagePerAnnum: data.job_details.package_per_annum,
          rating: data.job_details.rating,
          title: data.job_details.title,
        },
        similarJobs: data.similar_jobs.map(each => ({
          companyLogoUrl: each.company_logo_url,
          employmentType: each.employment_type,
          id: each.id,
          jobDescription: each.job_description,
          location: each.location,
          rating: each.rating,
          title: each.title,
        })),
      }
      this.setState({
        jobDetailList: updateJobDetails,
        apiStatus: apiStatusUpdate.success,
      })
    } else {
      this.setState({apiStatus: apiStatusUpdate.failure})
    }
  }

  renderFailureView = () => (
    <div className="failure-container">
      <img
        className="failure-image"
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
      />
      <h1 className="failure-heading">Oops! Something Went Wrong</h1>
      <p className="failure-desc">
        We cannot seem to find the page you are looking for.
      </p>
      <Link className="links" to="/jobs">
        <button className="logout-button" type="button">
          Retry
        </button>
      </Link>
    </div>
  )

  // testid="loader"

  renderLoaderView = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  clickJobDetails = id => {
    this.setState({id}, this.getJobDetails)
  }

  renderJobDetailsView = () => {
    const {jobDetailList} = this.state
    const {jobDetails, similarJobs} = jobDetailList
    const {
      companyLogoUrl,
      companyWebsiteUrl,
      employmentType,
      title,
      jobDescription,
      location,
      packagePerAnnum,
      rating,
      skills,
      lifeAtCompany,
    } = jobDetails
    return (
      <div className="job-details-container">
        <div className="job-details-card-container">
          <div className="company-logo-container">
            <img
              className="company-logo"
              alt="job details company logo"
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
            <p className="employee-salary">{packagePerAnnum}</p>
          </div>
          <hr className="line" />
          <div className="website-url-container">
            <h1 className="job-details-description">Description</h1>
            <div className="website-icon-container">
              <a href={companyWebsiteUrl} className="website">
                Visit
                <FiExternalLink className="web-link" />
              </a>
            </div>
          </div>

          <p className="job-details-desc">{jobDescription}</p>
          <h1 className="employee-salary">Skills</h1>
          <ul className="skills-list-container">
            {skills.map(each => (
              <li className="skills-list" key={each.name}>
                <img
                  className="skills-image"
                  alt={each.name}
                  src={each.imageUrl}
                />
                <p className="skills">{each.name}</p>
              </li>
            ))}
          </ul>
          <h1 className="employee-salary">Life at company</h1>
          <div className="life-at-company-container">
            <p className="job-details-desc life">{lifeAtCompany.description}</p>
            <img
              className="life-at-image"
              alt="life at company"
              src={lifeAtCompany.imageUrl}
            />
          </div>
        </div>

        <div className="similar-jobs-container">
          <h1 className="job-details-description">Similar Jobs</h1>
          <ul className="jobs-details-list-container">
            {similarJobs.map(each => (
              <SimilarJobs
                key={each.id}
                similarJobs={each}
                detailsJob={this.clickJobDetails}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'SUCCESS':
        return this.renderJobDetailsView()
      case 'FAILURE':
        return this.renderFailureView()
      case 'IN_PROGRESS':
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <>
        <Header />
        <div className="jobs-container">{this.renderApiStatus()}</div>
      </>
    )
  }
}
export default JobDetails
