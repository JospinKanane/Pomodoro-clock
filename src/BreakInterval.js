import React from 'react';
//import { useState } from 'react'
//import { useState } from 'react/cjs/react.production.min';

const BreakInterval = (props) => {

    const breakDescrease = () => {
        if(props.breakInterval === 0){
            return;
        }
        props.downDateBreak();
    }

    const breakIncrease = () => {
        if(props.breakInterval === 60){
            return;
        }
        props.upDateBreak()
    }
    return (
        <div id="session-length">
            <h4>Break length</h4>
            <div  className="time-length">
              <button onClick={breakDescrease}>Down</button>
              <p>{props.breakInterval}</p>
              <button onClick={breakIncrease}>Up</button>
            </div>
        </div>

    )
}

export default BreakInterval