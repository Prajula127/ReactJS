import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
// import Logout from './components/LogoutButton'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/about" component={About} />
    {/* <ProtectedRoute component={Logout} /> */}
    <Route component={NotFound} />
  </Switch>
)
export default App
