/**
 * Created by terios on 12/31/16.
 */

import React from 'react';


const Player = React.createClass({

    render(){
        return (
            <div className="player">
                <p>
                    <strong>{this.props.player.name}</strong>
                </p>
                <span className="score">{this.props.player.score}</span>
            </div>
        )
    }
});

export default Player;