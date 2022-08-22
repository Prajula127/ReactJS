import './index.css'

const ShowPassword = props => {
  const {lists, isChecked, deletes} = props
  const {id, websiteInput, userInput, passwordInput} = lists
  const checked = isChecked ? (
    passwordInput
  ) : (
    <img
      className="no-pwd"
      alt="stars"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
    />
  )
  const deleteItem = () => {
    deletes(id)
  }
  return (
    <li className="lists-items">
      <div className="items-container">
        <div className="initial">
          <p className="first">{websiteInput[0].toUpperCase()}</p>
        </div>
        <div className="lists">
          <p className="name">{websiteInput}</p>
          <p className="name">{userInput}</p>
          <p className="name">{checked}</p>
        </div>
        <button
          className="delete-button"
          type="button"
          testid="delete"
          onClick={deleteItem}
        >
          <img
            className="delete"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}
export default ShowPassword
