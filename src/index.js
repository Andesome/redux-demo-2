/**
 *  created by ling on 2017-12-12 11:02.
 */
import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import { Provider } from 'react-redux';
import { combineReducers,createStore } from "redux";

import Welcome from "./component/Welcome";
import Login from "./container/Login";
import Cart from "./container/Cart"

import { cart } from "./reducers/cart";
import { isAuth } from "./reducers/login";

let rootReducers = combineReducers({cart,isAuth})
let store = createStore(rootReducers);


class App extends React.Component {
    render() {
        // console.log(store.getState())
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/login" component={Login} />
                    <Route path="/cart" component={Cart} />
                </div>
            </Router>
        )
    }
}

store.subscribe(()=>{console.log("get store",store.getState())})

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)
