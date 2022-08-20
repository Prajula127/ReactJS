import {Component} from 'react'
import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    amountLists: [],
    titleInput: '',
    amountInput: '',
    typeInput: transactionTypeOptions[0].optionId,
  }

  onTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onSelectType = event => {
    this.setState({typeInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {titleInput, amountInput, typeInput} = this.state
    const typeOption = transactionTypeOptions.find(
      each => each.optionId === typeInput,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      amountLists: [...prevState.amountLists, newTransaction],
      titleInput: '',
      amountInput: '',
      typeInput: transactionTypeOptions[0].optionId,
    }))
  }

  onDelete = id => {
    const {amountLists} = this.state
    this.setState({amountLists: amountLists.filter(each => each.id !== id)})
  }

  getBalance = () => {
    const {amountLists} = this.state
    let balance = 0
    let income = 0
    let expense = 0
    amountLists.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        income += each.amount
      } else {
        expense += each.amount
      }
    })
    balance = income - expense
    return balance
  }

  getExpense = () => {
    const {amountLists} = this.state
    let expense = 0
    amountLists.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        expense += each.amount
      }
    })
    return expense
  }

  getIncome = () => {
    const {amountLists} = this.state
    let income = 0
    amountLists.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        income += each.amount
      }
    })
    return income
  }

  render() {
    const {amountLists, titleInput, typeInput, amountInput} = this.state
    const balanceDetails = this.getBalance()
    const incomeDetails = this.getIncome()
    const expenseDetails = this.getExpense()
    return (
      <div className="app-container">
        <div className="money-manager-container">
          <div className="user-container">
            <h1 className="user">Hi, Richard</h1>
            <p className="welcome">
              Welcome back to your <span className="sub">Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            balance={balanceDetails}
            income={incomeDetails}
            expense={expenseDetails}
          />
          <div className="transaction-details-container">
            <div className="add-transaction-container">
              <h1 className="add-transaction">Add Transaction</h1>
              <form className="form-container" onSubmit={this.onSubmitForm}>
                <label className="label" htmlFor="title">
                  TITLE
                </label>
                <input
                  className="input"
                  value={titleInput}
                  id="title"
                  type="text"
                  placeholder="TITLE"
                  onChange={this.onTitle}
                />
                <label className="label" htmlFor="amount">
                  Amount
                </label>
                <input
                  className="input"
                  value={amountInput}
                  id="amount"
                  type="text"
                  placeholder="AMOUNT"
                  onChange={this.onAmount}
                />
                <label className="label" htmlFor="type">
                  Type
                </label>
                <select
                  className="input"
                  value={typeInput}
                  id="type"
                  onChange={this.onSelectType}
                >
                  {transactionTypeOptions.map(each => (
                    <option
                      key={each.optionId}
                      value={each.optionId}
                      className="option"
                    >
                      {each.displayText}
                    </option>
                  ))}
                </select>
                <button className="add" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="history-details-container">
              <h1 className="add-transaction">History</h1>
              <div className="info-container">
                <p className="titles">Title</p>
                <p className="titles">Amount</p>
                <p className="titles">Type</p>
                <p className="title">delete</p>
              </div>
              <ul className="lists-container">
                {amountLists.map(each => (
                  <TransactionItem
                    key={each.id}
                    details={each}
                    deletes={this.onDelete}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
