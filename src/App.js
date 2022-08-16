import React from 'react';
import './App.css';
import BreakInterval from './BreakInterval';
import SessionLength from './SessionLength';
import Timer from './Timer';
import Footer from './Footer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength : 5,
      sessionLength : 25,
      timerMinute : 25,
    };
    this.increaseBreakLength = this.increaseBreakLength.bind(this);
    this.descreaseBreakLength = this.descreaseBreakLength.bind(this);
    this.increaseSessionLength = this.increaseSessionLength.bind(this);
    this.descreaseSessionLength = this.descreaseSessionLength.bind(this);
    this.upGradeTimer = this.upGradeTimer.bind(this);
    this.switchInterval = this.switchInterval.bind(this);
    this.onreset = this.onreset.bind(this);
  }

  increaseBreakLength() {
    this.setState((props) => {
      return {
        breakLength : props.breakLength + 1,
      }
    })
  }

  descreaseBreakLength() {
    this.setState((props) => {
      return {
        breakLength : props.breakLength - 1,
      }
    })
  }

  increaseSessionLength(){
    this.setState((props) => {
      return {
        sessionLength : props.sessionLength + 1,
        timerMinute : props.sessionLength +1
      }
    })
  }

  descreaseSessionLength(){
    this.setState((props) => {
      return {
        sessionLength : props.sessionLength - 1,
        timerMinute : props.sessionLength - 1
      }
    })
  }

  upGradeTimer(){
    this.setState((props) => {
      return {
        timerMinute : props.timerMinute - 1,
      }
    })
  }

  switchInterval(isSession){
    if(isSession){
      this.setState({
        timerMinute : this.state.sessionLength
      })
    } else {
      this.setState({
        timerMinute : this.state.breakLength
      })
    }
  }
  onreset(){
    this.setState({timerMinute: this.state.sessionLength})
  }

  render(){
    return (
      <main>
        <span>Pomodoro 25 : 5 Clock</span>
        <div id="timer-container">
          <BreakInterval breakInterval={this.state.breakLength} 
          upDateBreak={this.increaseBreakLength} 
          downDateBreak={this.descreaseBreakLength}
          />
          <SessionLength sessionLength={this.state.sessionLength}
          upDateSession={this.increaseSessionLength}
          downDateSession={this.descreaseSessionLength}
          />
        </div>
        <Timer timerMinute={this.state.timerMinute}
        breakLength={this.state.breakLength}
        upGradeTimer={this.upGradeTimer}
        switchInterval={this.switchInterval}
        onreset={this.onreset}
        />
        <Footer/>
      </main>
    )
  }
}

export default App;
