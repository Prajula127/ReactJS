import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const status = {
  progress: 'INPROGRESS',
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    activeTabId: languageFiltersData[0].id,
    repositoryList: [],
    appStatus: status.initial,
  }

  componentDidMount() {
    this.getRepositoryItems()
  }

  getRepositoryItems = async () => {
    const {activeTabId} = this.state

    const url = `https://apis.ccbp.in/popular-repos?language=${activeTabId}`

    this.setState({
      appStatus: status.progress,
    })
    // const url = ' https://apis.ccbp.in/popular-repos'
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok) {
      const updateRepository = data.popular_repos.map(each => ({
        name: each.name,
        id: each.id,
        issuesCount: each.issues_count,
        forksCount: each.forks_count,
        starsCount: each.stars_count,
        avatarUrl: each.avatar_url,
      }))
      this.setState({
        repositoryList: updateRepository,
        appStatus: status.success,
      })
    } else if (response.status === 401) {
      this.setState({
        appStatus: status.failure,
      })
    }
    console.log(response)
  }

  clickLanguageTabs = id => {
    this.setState({activeTabId: id}, this.getRepositoryItems)
  }

  renderFailure = () => {
    const {activeTabId} = this.state
    return (
      <div className="app-store-container">
        <div className="app-store">
          <h1 className="heading">Popular</h1>
          <ul className="languages-tab-list-container">
            {languageFiltersData.map(each => (
              <LanguageFilterItem
                key={each.id}
                tabItems={each}
                isActive={activeTabId === each.id}
                clickTabItem={this.clickLanguageTabs}
              />
            ))}
          </ul>
          <div className="failure">
            <img
              className="fail"
              alt=""
              src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
            />
            <p className="para">Something Went Wrong</p>
          </div>
        </div>
      </div>
    )
  }

  renderIsLoading = () => {
    const {activeTabId} = this.state
    return (
      <div className="app-store-container">
        <div className="app-store">
          <h1 className="heading">Popular</h1>
          <ul className="languages-tab-list-container">
            {languageFiltersData.map(each => (
              <LanguageFilterItem
                key={each.id}
                tabItems={each}
                isActive={activeTabId === each.id}
                clickTabItem={this.clickLanguageTabs}
              />
            ))}
          </ul>
          <div testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        </div>
      </div>
    )
  }

  renderRepositoryItems = () => {
    const {repositoryList, activeTabId} = this.state
    return (
      <div className="app-store-container">
        <div className="app-store">
          <h1 className="heading">Popular</h1>
          <ul className="languages-tab-list-container">
            {languageFiltersData.map(each => (
              <LanguageFilterItem
                key={each.id}
                tabItems={each}
                isActive={activeTabId === each.id}
                clickTabItem={this.clickLanguageTabs}
              />
            ))}
          </ul>

          <ul className="repository-lists-container">
            {repositoryList.map(each => (
              <RepositoryItem key={each.id} repositoryItems={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {appStatus} = this.state

    switch (appStatus) {
      case 'SUCCESS':
        return this.renderRepositoryItems()
      case 'FAILURE':
        return this.renderFailure()
      case 'INPROGRESS':
        return this.renderIsLoading()
      default:
        return null
    }
  }
}
export default GithubPopularRepos
