import './index.css'

const DeleteHistories = props => {
  const {browserList, updates} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = browserList

  const deleteTitle = () => {
    updates(id)
  }

  return (
    <li className="browsing-lists">
      <div className="content-container">
        <p className="time">{timeAccessed}</p>
        <div className="logo-container">
          <img className="logos" alt="domain logo" src={logoUrl} />
          <p className="titles">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
      </div>
      <button
        className="delete-button"
        type="button"
        testid="delete"
        onClick={deleteTitle}
      >
        <img
          className="delete-icon"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}
export default DeleteHistories
