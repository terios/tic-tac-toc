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
        console.log(this.props);
        return (
            <div className="content">
                <Player/>
                <div className="game-board">
                    <table>
                        {this.getGrid()}
                    </table>
                </div>
                <Player/>
            </div>
        )
    }
});

export default GameBoard;