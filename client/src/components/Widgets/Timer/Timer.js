import React from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import ReplayIcon from '@material-ui/icons/Replay';
import './Timer.css';
class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
      isOn: false,
      start: 0
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }
  startTimer() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 10);
  }
  stopTimer() {
    this.setState({ isOn: false })
    clearInterval(this.timer)
  }
  resetTimer() {
    this.setState({ time: 0, isOn: false })
  }
  render() {
    const { time } = this.state;
    let centiseconds = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(time / 3600000)).slice(-2);
    let start = (this.state.time === 0) ?
      <PlayArrowIcon onClick={this.startTimer}>start</PlayArrowIcon> :
      null
    let stop = (this.state.time === 0 || !this.state.isOn) ?
      null :
      <PauseIcon onClick={this.stopTimer}>stop</PauseIcon>
    let resume = (this.state.time === 0 || this.state.isOn) ?
      null :
      <PlayArrowIcon onClick={this.startTimer}>resume</PlayArrowIcon>
    let reset = (this.state.time === 0 || this.state.isOn) ?
      null :
      <ReplayIcon onClick={this.resetTimer}>reset</ReplayIcon>
    return (
      <div id="circle" class="">
        <div class="insideCircle">
          <h3>timer:</h3>
          <div className="Stopwatch-display">
            {hours} : {minutes} : {seconds} : {centiseconds}
          </div>
          {start}
          {resume}
          {stop}
          {reset}
        </div>
      </div>
    )
  }
}
export default Timer