// Write your code here
import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'

import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Layout = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="layout-container">
          <div className="layout-card">
            <Header />
            <div className="show-navbar-container">
              {showLeftNavbar && (
                <div className="left-container">
                  <h1 className="menu">Left Navbar Menu</h1>
                  <ul className="un-order">
                    <li className="item list">Item 1</li>
                    <li className="item list">Item 2</li>
                    <li className="item list">Item 3</li>
                    <li className="item list">Item 4</li>
                  </ul>
                </div>
              )}

              {showContent && <Body />}

              {showRightNavbar && (
                <div className="left-container">
                  <h1 className="menu">Right Navbar</h1>
                  <div className="box">
                    <p className="item">Ad 1</p>
                  </div>
                  <div className="box">
                    <p className="item">Ad 2</p>
                  </div>
                </div>
              )}
            </div>
            <Footer />
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Layout
