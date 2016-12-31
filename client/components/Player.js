/**
 * Created by terios on 12/31/16.
 */

import React from 'react';


const Player = React.createClass({

    render(){
        return (
            <div className="player">
                <p>
                    <strong>Player 1</strong>
                </p>
                <span className="score">0</span>
            </div>
        )
    }
});

export default Player;