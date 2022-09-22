import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'

import './App.css'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoDetails from './components/VideoDetails'
import NotFound from './components/NotFound'
import SavedContext from './SavedContext'
// Replace your code here
class App extends Component {
  state = {savedItems: [], isTheme: false}

  addSavedItems = videos => {
    const {savedItems} = this.state
    const videoObject = savedItems.find(each => each.id === videos.id)
    if (videoObject) {
      this.setState(prevState => ({
        savedItems: prevState.savedItems.filter(each => each.id !== videos.id),
      }))
    } else {
      this.setState(prevState => ({
        savedItems: [...prevState.savedItems, videos],
      }))
    }
  }

  clickTheme = () => {
    this.setState(prevState => ({isTheme: !prevState.isTheme}))
  }

  render() {
    const {savedItems, isTheme} = this.state
    return (
      <SavedContext.Provider
        value={{
          savedItems,
          isTheme,
          addSavedItems: this.addSavedItems,
          themeIsClicked: this.clickTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <Route path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </SavedContext.Provider>
    )
  }
}

export default App
