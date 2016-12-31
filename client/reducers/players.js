/**
 * Created by terios on 12/31/16.
 */


import CheckWinner from '../helpers/checkWinner';


function players(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_SCORE':
            console.log('update score');
            return state;
        case 'CHECK_WINNER':
            console.log('check winner');
            console.log(state);
            console.log(action);
            var winnerId = CheckWinner(action.grid);
            console.log(winnerId);
            if (winnerId) {
                return {
                    ...state,
                    players: [
                        ...state.players[0, winnerId],
                        {score: state.players[winnerId].score + 1},
                        ...state.players[winnerId]
                    ]
                };
            }
            return state;
        case 'NEXT_PLAYER':
            return {
                // take the current state
                ...state,
                // overwrite this post with a new one
                ['currentPlayer']: !state['currentPlayer']
            };
        default:
            return state;

    }
}
export default players;