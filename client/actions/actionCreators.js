/**
 * Created by terios on 12/31/16.
 */

export function toggleDrawer(state) {
    return {type: 'TOGGLE_DRAWER', state}
}

export function closeDrawer(state) {
    return {type: 'CLOSE_DRAWER', state}
}


export function selectSquare(player, row, index) {
    return {type: 'SELECT_SQUARE', player, row, index}
}

export function nextPlayer() {
    return {type: 'NEXT_PLAYER'}
}

export function checkWinner(grid) {
    return {type: 'CHECK_WINNER', grid}
}