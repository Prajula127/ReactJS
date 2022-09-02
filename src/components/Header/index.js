// Write your JS code here
import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = () => (
  <>
    <ul className="links">
      <Link to="/">
        <li className="link">Home</li>
      </Link>
      <Link to="/about">
        <li className="link">About</li>
      </Link>
    </ul>
  </>
)

export default withRouter(Header)
