// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'

import {
  FailureViewContainer,
  FailImage,
  Fail,
  Loading,
  AppContainer,
  AppLogoContainer,
  LogoContainer,
  Logo,
  LogoText,
  Heading,
} from './styledComponents'

import './index.css'

const apiStatusUpdate = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class CowinDashboard extends Component {
  state = {
    apiStatus: apiStatusUpdate.initial,
    vaccination: {},
  }

  componentDidMount() {
    this.getVaccinationData()
  }

  getVaccinationData = async () => {
    this.setState({
      apiStatus: apiStatusUpdate.inProgress,
    })

    const covidVaccinationDataApiUrl =
      'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(covidVaccinationDataApiUrl)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = {
        last7DaysVaccination: fetchedData.last_7_days_vaccination.map(
          eachDayData => ({
            vaccineDate: eachDayData.vaccine_date,
            dose1: eachDayData.dose_1,
            dose2: eachDayData.dose_2,
          }),
        ),
        vaccinationByAge: fetchedData.vaccination_by_age.map(range => ({
          age: range.age,
          count: range.count,
        })),
        vaccinationByGender: fetchedData.vaccination_by_gender.map(
          genderType => ({
            gender: genderType.gender,
            count: genderType.count,
          }),
        ),
      }
      this.setState({
        vaccination: updatedData,
        apiStatus: apiStatusUpdate.success,
      })
    } else {
      this.setState({apiStatus: apiStatusUpdate.failure})
    }
  }

  renderFailureView = () => (
    <FailureViewContainer>
      <FailImage
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
      />
      <Fail>Something went wrong</Fail>
    </FailureViewContainer>
  )

  renderLoader = () => (
    <Loading testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </Loading>
  )

  renderSuccessView = () => {
    const {vaccination} = this.state
    return (
      <>
        <VaccinationCoverage coverage={vaccination.last7DaysVaccination} />
        <VaccinationByGender byGender={vaccination.vaccinationByGender} />
        <VaccinationByAge byAge={vaccination.vaccinationByAge} />
      </>
    )
  }

  renderApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusUpdate.success:
        return this.renderSuccessView()
      case apiStatusUpdate.failure:
        return this.renderFailureView()
      case apiStatusUpdate.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <AppContainer>
        <AppLogoContainer>
          <LogoContainer>
            <Logo
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            />
            <LogoText>Co-Win</LogoText>
          </LogoContainer>
          <Heading>CoWIN Vaccination in India</Heading>
          {this.renderApiStatus()}
        </AppLogoContainer>
      </AppContainer>
    )
  }
}
export default CowinDashboard
