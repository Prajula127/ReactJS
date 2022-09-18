import './index.css'

const NotFound = () => (
  <div className="jobs-container">
    <div className="failure-container">
      <img
        className="failure-image"
        alt="not found"
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
      />
      <h1 className="failure-heading">Page Not Found</h1>
      <p className="failure-desc">
        we're sorry, the page you requested could not be found
      </p>
    </div>
  </div>
)
export default NotFound
