/**
 *  created by ling on 2017-12-12 14:31.
 */



let initialState = {
    isAuth: false
}

export function isAuth(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {...state, isAuth: true}
        case "LOGIN_FAIL":
            return {...state, isAuth: false}
        default:
            return state
    }
}