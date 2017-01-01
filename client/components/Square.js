/**
 * Created by terios on 12/31/16.
 */

import React from 'react';
import store from '../store';

const Square = React.createClass({

    handleClick(e){
        if (this.props.grid[this.props.row][this.props.index] == null) {
            if (this.props.players.currentPlayer) {
                e.target.className = 'cross'
            } else {
                e.target.className = 'circle'
            }
            this.props.selectSquare(this.props.players.currentPlayer, this.props.row, this.props.index);
        }
    },
    render(){
        let {index, row} = this.props;
        return (
            <div className="square" onClick={this.handleClick}></div>
        )
    }
});

export default Square;