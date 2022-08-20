// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expense} = props
  return (
    <div className="balance-details-container">
      <div className="balance-container">
        <img
          className="money"
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div className="details">
          <p className="balance">Your Balance</p>
          <p className="amount" testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          className="money"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <div className="details">
          <p className="balance">Your Income</p>
          <p className="amount" testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="expense-container">
        <img
          className="money"
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div className="details">
          <p className="balance">Your Expenses</p>
          <p className="amount" testid="expensesAmount">
            Rs {expense}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
