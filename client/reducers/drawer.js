/**
 * Created by terios on 12/31/16.
 */

function drawer(state = [], action) {
    switch (action.type) {
        case 'TOGGLE_DRAWER':
            return !state;
        case 'CLOSE_DRAWER':
            return false;
        default:
            return state;

    }
}

export default drawer;
