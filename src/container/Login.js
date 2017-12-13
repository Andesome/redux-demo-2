/**
 *  created by ling on 2017-12-12 11:11.
 */

import React from "react";
import {connect} from "react-redux";


import {Button, List, InputItem, WingBlank, WhiteSpace, Toast} from 'antd-mobile';
import {isAuth} from "../reducers/login";
import {loginSuccess, loginFail} from "../actions/login";

import Auth from "./Auth";

const userTable = [
    {
        username: "lll",
        userpw: "123"
    },{
        username: "haha",
        userpw: "123"
    },{
        username: "test",
        userpw: "abc"
    },{
        username: "admin",
        userpw: "admin"
    }
]

@connect(
    isAuth,
    {loginFail, loginSuccess}
)
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name:"",
            password:""
        }
        this.signIn = this.signIn.bind(this);
    }

    //处理用户名及密码输入
    handleChange(key, val) {
        this.setState({[key]: val});
    }

    signIn() {
        let name = this.state.name;
        let password = this.state.password;
        let isExist = false;
        userTable.forEach((user,idx)=>{
            //用户存在
            if(user.username === name){
                if(user.userpw === password){
                    // console.log("登录成功",this.props)
                    Toast.info("登录成功，即将跳转...",2,function () {
                        this.props.history.push("/cart");
                    }.bind(this))
                    this.props.loginSuccess();
                }else{
                    this.props.loginFail();
                    Toast.info("密码输入错误",1);
                }
                isExist = true;
                return;
            }
            //用户不存在
            if(idx === userTable.length-1 && !isExist){
                Toast.info("没有找到该用户",2)
            }
        })
    }

    render() {
        console.log("登录页面被渲染了")
        return (
            <div>
                <WingBlank>
                    <List renderHeader={() => 'login form'}>
                        <InputItem placeholder="please input your name" onChange={(val) => {
                            this.handleChange("name", val)
                        }}>
                            name
                        </InputItem>
                        <InputItem type="password" placeholder="please input your password" onChange={(val) => {
                            this.handleChange("password", val)
                        }}>
                            password
                        </InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.signIn}>sign in</Button>
                </WingBlank>
            </div>
        )
    }
}


export default Login;