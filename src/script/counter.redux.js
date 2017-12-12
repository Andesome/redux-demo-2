/**
 *  created by ling on 2017-12-8 10:21.
 */

let initialState = {
    num:10,
    status:"初始"
}

//reducer
function couter(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            return Object.assign({},state,{num:state.num+1,status:action.text});
        case "DECREMENT":
            return Object.assign({},state,{num:state.num-1,status:action.text});
        default:
            return state;
    }
}

//action
const ADD_COUNTER = (text) => {
    return {
        type: "INCREMENT",
        text
    }
}
const CUT_COUNTER = (text) => {
    return {
        type: "DECREMENT",
        text
    }
}

const DELAY_ADD = (text) => {
   return dispatch => {
       setTimeout(() => {
               //some code ...
               dispatch(ADD_COUNTER(text))
           },2000);
   }
}
// store.dispatch(ADD_COUNTER())
//
// store.subscribe(function (data) {
//     console.log(data, store.getState())
// })


export {couter, ADD_COUNTER, CUT_COUNTER,DELAY_ADD};