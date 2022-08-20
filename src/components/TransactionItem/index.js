// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details, deletes} = props
  const {id, title, amount, type} = details

  const deleteItem = () => {
    deletes(id)
  }

  return (
    <li className="lists-items">
      <div className="info-containers">
        <p className="types">{title}</p>
        <p className="types amounts">Rs {amount}</p>
        <p className="types">{type}</p>
        <button className="button" type="button" onClick={deleteItem}>
          <img
            className="delete"
            testid="delete"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
