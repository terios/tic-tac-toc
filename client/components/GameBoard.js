/**
 * Created by terios on 12/31/16.
 */

import React from 'react';


import Player from './Player';
import Square from './Square';

const GameBoard = React.createClass({

    getGrid(){
        return (
            <tbody>
            {this.props.grid.map((row, i) =>
                <tr key={i}>
                    {row.map((square, y) =>
                        <td key={y}><Square {...this.props} row={i} index={y}/></td>
                    )}
                </tr>
            )}
            </tbody>
        )
    },
    render(){
        return (
            <div className="content">
                <Player player={this.props.players.player0}/>
                <div className="game-board">
                    <table>
                        {this.getGrid()}
                    </table>
                </div>
                <Player player={this.props.players.player1}/>
            </div>
        )
    }
});

export default GameBoard;