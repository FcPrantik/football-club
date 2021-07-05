import React from 'react';
import './Player.css';

const Player = (props) => {
    const {name, salary, picture} = props.player;
    const handleSelectPlayer = props.handleSelectPlayer;
    return (
        <div className = "playerStyle">
            <h4>{name}</h4>
            <p>Salary:{salary}</p>
            <img src= {picture} alt="" />
            <button onClick = {() => handleSelectPlayer(props.player)}>Select Player</button>
        </div>
    );
};

export default Player;