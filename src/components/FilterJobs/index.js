import './index.css'

const FilterJobs = props => {
  const renderCheckboxInput = () => {
    const {employmentList, employmentType} = props

    const checkboxChange = event => {
      employmentType(event.target.id)
      console.log(event.target.id)
    }

    return (
      <div className="radio-input-container">
        <h1 className="type">Type of Employment</h1>
        <ul className="salary-range-list">
          {employmentList.map(each => (
            <li className="lists" key={each.employmentTypeId}>
              <input
                className="radio"
                type="checkbox"
                name="option"
                id={each.employmentTypeId}
                onChange={checkboxChange}
              />
              <label className="labels" htmlFor={each.employmentTypeId}>
                {each.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const renderRadioInput = () => {
    const {salaryList, salaryInput} = props

    const radioChange = event => {
      salaryInput(event.target.id)
      console.log(event.target.id)
    }

    return (
      <div className="radio-input-container">
        <h1 className="type">Salary Range</h1>
        <ul className="salary-range-list">
          {salaryList.map(each => (
            <li className="lists" key={each.salaryRangeId}>
              <input
                className="radio"
                type="radio"
                name="option"
                id={each.salaryRangeId}
                onChange={radioChange}
              />
              <label className="labels" htmlFor={each.salaryRangeId}>
                {each.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <>
      {renderCheckboxInput()}
      <hr className="line" />
      {renderRadioInput()}
      <hr className="line" />
    </>
  )
}
export default FilterJobs
