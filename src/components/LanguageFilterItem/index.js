// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {tabItems, clickTabItem, isActive} = props
  const {id, language} = tabItems

  const tabName = isActive ? 'active' : 'active inactive'

  const clickedLanguage = () => {
    clickTabItem(id)
  }

  return (
    <li className="languages-container">
      <button className={tabName} type="button" onClick={clickedLanguage}>
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
