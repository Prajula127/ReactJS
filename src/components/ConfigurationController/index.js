// Write your code here

import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContext = () => {
        onToggleShowContent()
      }

      const onLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <nav className="nav-header">
          <div className="nav-content">
            <h1 className="layout">Layout</h1>
            <div className="input-container">
              <input
                className="input"
                type="checkbox"
                id="content"
                onClick={onChangeContext}
              />
              <label className="label" htmlFor="content">
                Content
              </label>
            </div>
            <div className="input-container">
              <input
                className="input"
                type="checkbox"
                id="leftNavbar"
                onClick={onLeftNavbar}
              />
              <label className="label" htmlFor="leftNavbar">
                Left Navbar
              </label>
            </div>
            <div className="input-container">
              <input
                className="input"
                type="checkbox"
                id="rightNavbar"
                onClick={onRightNavbar}
              />
              <label className="label" htmlFor="rightNavbar">
                Right Navbar
              </label>
            </div>
          </div>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController

//
//
//
