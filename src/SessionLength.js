import React from 'react';

const SessionLength = (props) => {
    const sessionDescrease = () => {
        if(props.sessionLength === 0){
            return;
        }
        props.downDateSession();
    }

    const sessionIncrease = () => {
        if(props.sessionLength === 60){
            return;
        }
        props.upDateSession()
    }

    return (
        <div id="session-length">
            <h4>Session length</h4>
            <span className="time-length">
              <button onClick={sessionDescrease}>Down</button>
              <p>{props.sessionLength}</p>
              <button onClick={sessionIncrease}>Up</button>
            </span>
        </div>
    )
}

export default SessionLength