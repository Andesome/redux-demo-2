/**
 *  created by ling on 2017-12-12 14:25.
 */

import React from "react";
import {Redirect} from "react-router-dom";
import { connect } from "react-redux";

import { isAuth } from "../reducers/login";
import { loginSuccess,loginFail } from "../actions/login";

@connect(
    isAuth,
    { loginSuccess,loginFail }
)
class Auth extends React.Component{
    render(){
        console.log("auth",this.props)
        return !this.props.isAuth ? <Redirect to="/" /> : null
    }
}

export default Auth;