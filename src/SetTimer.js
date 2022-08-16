import React from 'react';

const SetTimer = () => (<div id='setTimer'>
    <p>25 + 5 Clock</p>
    <div id='setTimer-child'>
        <div id='Break-Length'>
            <span>Break Length</span>
            <span>5</span>
            <button id='Break-Length-up'>Increase Break Time</button>
            <button id='Break-Length-down'>Descrease Break Time</button>
        </div>
        <div id='Session-Length'>
            <span>Session Length</span>
            <span>25</span>
            <button id='Session-Length-up'>Increase Session</button>
            <button id='Session-Length-down'>Descrease Session</button>
        </div>
    </div>
</div>)


export default SetTimer