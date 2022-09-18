import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'

import JobsCard from '../JobsCard'

// import FilterJobs from '../FilterJobs'

import './index.css'
import FilterJobs from '../FilterJobs'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const apiStatusUpdate = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const apiProfileStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class AllJobs extends Component {
  state = {
    apiStatus: apiStatusUpdate.initial,
    jobsData: [],
    searchInput: '',
    apiProfile: apiProfileStatus.initial,
    checkBoxInput: [],
    radioInput: '',
    profileData: [],
    responseSuccess: false,
  }

  componentDidMount() {
    this.getJobsData()
    this.getProfileData()
  }

  getJobsData = async () => {
    this.setState({apiStatus: apiStatusUpdate.inProgress})
    const {checkBoxInput, radioInput, searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiJobUrl = `https://apis.ccbp.in/jobs?employment_type=${checkBoxInput}&minimum_package=${radioInput}&search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiJobUrl, options)
    // console.log(response)
    if (response.ok) {
      const data = await response.json()
      //   console.log(data)
      const updateJobs = {
        jobs: data.jobs.map(each => ({
          companyLogoUrl: each.company_logo_url,
          employmentType: each.employment_type,
          id: each.id,
          jobDescription: each.job_description,
          location: each.location,
          packagePerAnnum: each.package_per_annum,
          rating: each.rating,
          title: each.title,
        })),
        total: data.total,
      }
      this.setState({jobsData: updateJobs, apiStatus: apiStatusUpdate.success})
    } else {
      this.setState({apiStatus: apiStatusUpdate.failure})
    }
  }

  getProfileData = async () => {
    this.setState({apiProfile: apiProfileStatus.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiProfileUrl = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const profileResponse = await fetch(apiProfileUrl, options)
    if (profileResponse.ok) {
      const data = [await profileResponse.json()]
      const updateProfile = data.map(each => ({
        name: each.profile_details.name,
        profileImageUrl: each.profile_details.profile_image_url,
        shortBio: each.profile_details.short_bio,
      }))
      //   console.log(updateProfile)
      this.setState({
        profileData: updateProfile,
        responseSuccess: true,
        apiProfile: apiProfileStatus.success,
      })
    } else {
      this.setState({apiProfile: apiProfileStatus.failure})
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
      <button
        className="logout-button"
        type="button"
        onClick={this.onRetryJobs}
      >
        Retry
      </button>
    </div>
  )

  renderProfileFailure = () => (
    <div className="retry-button">
      <button
        className="logout-button"
        type="button"
        onClick={this.onRetryProfile}
      >
        Retry
      </button>
    </div>
  )

  // testid="loader"

  renderLoaderView = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderNoJobsData = () => (
    <div className="no-jobs-container">
      <img
        className="no-jobs-image"
        alt="no jobs"
        src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
      />
      <h1 className="no-jobs">No Jobs Found</h1>
      <p className="no-jobs-desc">
        We could not find any jobs. Try other filters.
      </p>
    </div>
  )

  renderJobsData = () => {
    const {jobsData, searchInput} = this.state
    const {jobs} = jobsData
    const filterJobs = jobs.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const jobsListLength = filterJobs.length > 0
    return jobsListLength ? (
      <ul className="jobs-list-container">
        {filterJobs.map(each => (
          <JobsCard key={each.id} jobsList={each} />
        ))}
      </ul>
    ) : (
      this.renderNoJobsData()
    )
  }

  renderProfileData = () => {
    const {profileData, responseSuccess} = this.state
    if (responseSuccess) {
      const {name, profileImageUrl, shortBio} = profileData[0]
      return (
        <div className="profile-container">
          <img className="profile-image" alt="profile" src={profileImageUrl} />
          <h1 className="name">{name}</h1>
          <p className="bio">{shortBio}</p>
        </div>
      )
    }
    return null
  }

  onRetryJobs = () => {
    this.setState(
      {searchInput: '', radioInput: '', checkBoxInput: []},
      this.getJobsData,
    )
  }

  onRetryProfile = () => {
    this.getProfileData()
  }

  renderApiJobsStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'SUCCESS':
        return this.renderJobsData()
      case 'FAILURE':
        return this.renderFailureView()
      case 'IN_PROGRESS':
        return this.renderLoaderView()
      default:
        return null
    }
  }

  renderApiProfileStatus = () => {
    const {apiProfile} = this.state
    switch (apiProfile) {
      case 'SUCCESS':
        return this.renderProfileData()
      case 'FAILURE':
        return this.renderProfileFailure()
      case 'IN_PROGRESS':
        return this.renderLoaderView()
      default:
        return null
    }
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onEnterSearch = event => {
    if (event.key === 'Enter') {
      this.getJobsData()
    }
  }

  onClickSearch = () => {
    this.getJobsData()
  }

  onCheckBoxInput = checkbox => {
    const {checkBoxInput} = this.state
    const filterCheckbox = checkBoxInput.filter(each => each === checkbox)

    if (filterCheckbox.length === 0) {
      this.setState(
        prevState => ({checkBoxInput: [...prevState.checkBoxInput, checkbox]}),
        this.getJobsData,
      )
    } else {
      this.setState({checkBoxInput: checkbox}, this.getJobsData)
    }
  }

  onRadioInput = radioInput => {
    this.setState({radioInput}, this.getJobsData)
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="all-jobs-container">
        <div className="search-sm-input-container">
          <input
            className="search-input"
            type="search"
            placeholder="Search"
            value={searchInput}
            onChange={this.onSearchInput}
            onKeyDown={this.onEnterSearch}
          />
          <button
            className="search-button"
            // testid="searchButton"
            type="button"
            onClick={this.onClickSearch}
          >
            <BsSearch className="search-icon" />
          </button>
        </div>
        <div className="all-jobs-sidebar-container">
          {this.renderApiProfileStatus()}
          <hr className="line lines" />
          <FilterJobs
            employmentList={employmentTypesList}
            salaryList={salaryRangesList}
            salaryInput={this.onRadioInput}
            employmentType={this.onCheckBoxInput}
          />
        </div>
        <div className="all-jobs-data-container">
          <div className="search-input-container">
            <input
              className="search-input"
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={this.onSearchInput}
              onKeyDown={this.onEnterSearch}
            />
            <button
              className="search-button"
              type="button"
              onClick={this.onClickSearch}
            >
              <BsSearch className="search-icon" />
            </button>
          </div>
          {this.renderApiJobsStatus()}
        </div>
      </div>
    )
  }
}
export default AllJobs

//   testid="searchButton"
