import './index.css'

const TabItem = props => {
  const {tabsList, clickTab, isTabActive} = props
  const {tabId, displayText} = tabsList
  const tabs = isTabActive ? 'tab-button' : 'tab-inactive'

  const tabItem = () => {
    clickTab(tabId)
  }
  return (
    <li className="tab-items">
      <button className={tabs} type="button" onClick={tabItem}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
