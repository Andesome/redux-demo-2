/**
 *  created by ling on 2017-12-8 08:52.
 */

import React from "react";
import ReactDOM from "react-dom";
// import Provider from "react-redux";
import thunk from 'redux-thunk';
import {createStore,  applyMiddleware } from "redux";

import {couter, ADD_COUNTER, CUT_COUNTER, DELAY_ADD } from "./counter.redux";



let store = createStore(
    couter,
    applyMiddleware(thunk)
);

class Counter extends React.Component {

    render() {
        console.log("lytest", store.getState())
        return (
            <div>
                <p>{store.getState().num}</p>
                <button onClick={() =>{store.dispatch(ADD_COUNTER("加"))}}>add</button>
                <button onClick={() =>{store.dispatch(CUT_COUNTER("减"))}}>cut</button>
                <button onClick={() =>{store.dispatch(DELAY_ADD("托给"))}}>拖两天再给</button>
            </div>

        )
    }
}


function myRender() {
    ReactDOM.render(
        <Counter/>,
        document.getElementById("root")
    )
}
myRender()

store.subscribe(myRender);



