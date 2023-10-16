// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="heading">Digital Timer</h1>
        <h1 className="time-container">25:00</h1>
        <p>Paused</p>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
            alt="play icon"
          />
          <button type="button">Start</button>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
            alt="reset icon"
          />
          <button type="button">Reset</button>
        </div>
        <p>Set Timer Limit</p>
        <div>
          <button type="button">+</button>
          <p>25</p>
          <button type="button">-</button>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
