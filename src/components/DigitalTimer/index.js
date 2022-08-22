// Write your code here
import {Component} from 'react'

import './index.css'

const initialiseTimer = {
  isTimerRunning: false,
  timerInMinutes: 25,
  timerInSeconds: 0,
}

class DigitalTimer extends Component {
  state = initialiseTimer

  onTimerDecrement = () => {
    const {timerInMinutes} = this.state
    if (timerInMinutes > 1) {
      this.setState(prevState => ({
        timerInMinutes: prevState.timerInMinutes - 1,
      }))
    }
  }

  onTimerIncrement = () => {
    this.setState(prevState => ({timerInMinutes: prevState.timerInMinutes + 1}))
  }

  timerReset = () => {
    this.clearIntervalTime()
    this.setState(initialiseTimer)
  }

  timerIncrement = () => {
    const {timerInMinutes, timerInSeconds} = this.state
    const isTimerComplete = timerInMinutes * 60 === timerInSeconds
    if (isTimerComplete) {
      this.clearIntervalTime()
      this.setState({isTimerRunning: false})
    } else {
      this.setState(prevState => ({
        timerInSeconds: prevState.timerInSeconds + 1,
      }))
    }
  }

  timerStartAndPause = () => {
    const {isTimerRunning, timerInMinutes, timerInSeconds} = this.state
    const isTimerComplete = timerInMinutes * 60 === timerInSeconds

    if (isTimerComplete) {
      this.setState({timerInSeconds: 0})
    }
    if (isTimerRunning) {
      this.clearIntervalTime()
    } else {
      this.intervalId = setInterval(this.timerIncrement, 1000)
    }
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
  }

  componentWillUnmount = () => {
    this.clearIntervalTime()
  }

  clearIntervalTime = () => clearInterval(this.intervalId)

  timerShow = () => {
    const {timerInMinutes, timerInSeconds} = this.state
    const remainingSeconds = timerInMinutes * 60 - timerInSeconds
    const minutes = Math.floor(remainingSeconds / 60)
    const seconds = Math.floor(remainingSeconds % 60)
    const min = minutes > 9 ? minutes : `0${minutes}`
    const sec = seconds > 9 ? seconds : `0${seconds}`

    return `${min}:${sec}`
  }

  render() {
    const {isTimerRunning, timerInMinutes, timerInSeconds} = this.state
    const playOrPauseImg = isTimerRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const altName = isTimerRunning ? 'pause icon' : 'play icon'
    const labled = isTimerRunning ? 'Running' : 'Paused'
    const buttonDisabled = timerInSeconds > 0
    const text = isTimerRunning ? 'Pause' : 'Start'
    return (
      <div className="app-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="digital-timer-container">
          <div className="running-timer">
            <div className="timing">
              <h1 className="time">{this.timerShow()}</h1>
              <p className="play-pause">{labled}</p>
            </div>
          </div>
          <div className="digital-container">
            <div className="timer-set-container">
              <div className="timer-set-card">
                <div className="play-pause-container">
                  <button
                    className="pause"
                    type="button"
                    onClick={this.timerStartAndPause}
                  >
                    <img className="image" alt={altName} src={playOrPauseImg} />
                    <p className="start">{text}</p>
                  </button>
                </div>
                <div className="play-pause-container">
                  <button
                    className="pause"
                    type="button"
                    onClick={this.timerReset}
                  >
                    <img
                      className="image"
                      alt="reset icon"
                      src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    />
                    <p className="start">Reset</p>
                  </button>
                </div>
              </div>
            </div>
            <p className="timer-limit">Set Timer Limit</p>
            <div className="timer-limit-container">
              <div className="timer-set">
                <button
                  className="button"
                  type="button"
                  onClick={this.onTimerDecrement}
                  disabled={buttonDisabled}
                >
                  -
                </button>
                <div className="times">
                  <p className="timer">{timerInMinutes}</p>
                </div>
                <button
                  className="button"
                  type="button"
                  onClick={this.onTimerIncrement}
                  disabled={buttonDisabled}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
