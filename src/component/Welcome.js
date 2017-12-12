/**
 *  created by ling on 2017-12-12 11:04.
 */

import  React from "react";
import { Link } from "react-router-dom";

import { WingBlank, WhiteSpace } from 'antd-mobile';

const Welcome = () => (
    <div>
        <WingBlank>
            <h2>welcome ,you need login</h2>
            <WhiteSpace/>
            <Link  to="/login">login</Link>
        </WingBlank>
    </div>
)

export default Welcome;