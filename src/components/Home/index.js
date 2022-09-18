import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="jobs-container">
      <div className="home-container">
        <div className="home-card">
          <h1 className="home-heading">Find The Job That Fits Your Life</h1>
          <p className="home-desc">
            Millions of people are searching for jobs, salary information,
            company reviews. Find job that fits your abilities and potential.
          </p>
          <Link to="/jobs" className="links">
            <button className="logout-button find" type="button">
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
    </div>
  </>
)
export default Home
