/**
 *  created by ling on 2017-12-12 11:33.
 */


let initialState = {
    num: 0,
    status: "default",
}

//reducer
export function cart(state = initialState, action) {
    switch (action.type) {
        case 'ADD_CART':
            return Object.assign({}, state, {num: state.num + 1, status: action.status});
        case 'DEC_CART':
            return Object.assign({}, state, {num: state.num - 1, status: action.status});
        default:
            return state;
    }
}

