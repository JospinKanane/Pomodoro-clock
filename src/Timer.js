import React from 'react';

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
           isSession : true,
           timerSecond : 0,
        }
        this.playTimer= this.playTimer.bind(this)
        this.decreaseTimer= this.decreaseTimer.bind(this)
        this.stopTimer= this.stopTimer.bind(this)
        this.resetTimer= this.resetTimer.bind(this)

    }

    playTimer(){
      let intervalId = setInterval(() => {this.decreaseTimer()}, 1000);
      this.setState({intervalId : intervalId})
    }

    stopTimer(){
      clearInterval(this.state.intervalId);
    }

    resetTimer(){
      this.stopTimer();
      this.props.onreset();
      this.setState({timerSecond : 0})
    }
    
    decreaseTimer(){
      switch(this.state.timerSecond){
        case 0:
          if(this.props.timerMinute === 0){
            this.props.switchInterval()
          }
          this.props.upGradeTimer(),
          this.setState({
            timerSecond: 59
          })
          break;
        default:
          this.setState((props) => {
            return {
              timerSecond: props.timerSecond - 1,
            }
          })

      }
      /*while(this.state.timerSecond){
        if(this.state.timerSecond === 0){
          this.props.upGradeTimer(),
          this.setState({
            timerSecond: 59
          })
        }
        else{
          this.setState((props) => {
            return {
              timerSecond: props.timerSecond - 1,
            }
          })
        }
      }*/
    }

    render() {
        return(
          <div>
            <div  id="timer">
               <h3>{this.state.isSession===true ? 'Session' : 'Break'}</h3>
               <div id="timer-child">
                  <span>{this.props.timerMinute}</span>
                  <span>:</span>
                  <span>{this.state.timerSecond === 0 ? "00" : this.state.timerSecond < 10 ? "0" + this.state.timerSecond : this.state.timerSecond}</span>
               </div>
             </div>
             <div id="display-action">
               <button onClick={this.playTimer}>Play</button>
               <button onClick={this.stopTimer}>Stop</button>
               <button onClick={this.resetTimer}>Reflesh</button>
             </div>
          </div>
        )
    }
}

export default Timer