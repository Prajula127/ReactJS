// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryItems} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = repositoryItems

  return (
    <li className="lists">
      <img className="image" alt={name} src={avatarUrl} />
      <h1 className="name">{name}</h1>
      <div className="icon-container">
        <img
          className="icon"
          alt="stars"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
        />
        <p className="stars">{starsCount} stars</p>
      </div>
      <div className="icon-container">
        <img
          className="icon"
          alt="forks"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
        />
        <p className="stars">{forksCount} forks</p>
      </div>
      <div className="icon-container">
        <img
          className="icon"
          alt="open issues"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
        />
        <p className="stars">{issuesCount} open issues</p>
      </div>
    </li>
  )
}
export default RepositoryItem
