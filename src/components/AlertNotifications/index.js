// Write your code here
import {Component} from 'react'

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

class AlertNotifications extends Component {
  renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle className="success icon" />
      <div className="content-container">
        <h1 className="text success">Success</h1>
        <p className="desc">You can access all the files in the folder</p>
      </div>
    </Notification>
  )

  renderErrorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="error icon" />
      <div className="content-container">
        <h1 className="text error">Error</h1>
        <p className="desc">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  renderWarningNotification = () => (
    <Notification>
      <MdWarning className="warning icon" />
      <div className="content-container">
        <h1 className="text warning">Warning</h1>
        <p className="desc">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  renderInfoNotification = () => (
    <Notification>
      <MdInfo className="info icon" />
      <div className="content-container">
        <h1 className="text info">Info</h1>
        <p className="desc">Anyone on the internet can view these files</p>
      </div>
    </Notification>
  )

  render() {
    return (
      <div className="app-container">
        <div className="alert-container">
          <h1 className="heading">Alert Notifications</h1>
          {this.renderSuccessNotification()}
          {this.renderErrorNotification()}
          {this.renderWarningNotification()}
          {this.renderInfoNotification()}
        </div>
      </div>
    )
  }
}
export default AlertNotifications
