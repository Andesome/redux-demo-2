/**
 *  created by ling on 2017-12-12 11:11.
 */

import  React from "react";

import { Button, List, InputItem, WingBlank, WhiteSpace } from 'antd-mobile';

class Login extends  React.Component{

    render(){
        return(
            <div>
                <WingBlank>
                    <List renderHeader={() => 'login form'}>
                        <InputItem>
                            name
                        </InputItem>
                        <InputItem>
                            password
                        </InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button  type="primary">sign in</Button>
                </WingBlank>
            </div>
        )
    }
}


export default Login;