/**
 *  created by ling on 2017-12-12 14:25.
 */

import React from "react";
import {Redirect} from "react-router-dom";
import { connect } from "react-redux";


const mapStateToProps = state => {
    console.log("Auth mapStateToProps",state)
    return {
        isAuth:state.isAuth.isAuth
    }
}


class Auth extends React.Component{
    render(){
        console.log("验证页面渲染了:",this.props)
        return !this.props.isAuth ? <Redirect to="/" /> : null
    }
}

Auth = connect(
    mapStateToProps
)(Auth)


export default Auth;