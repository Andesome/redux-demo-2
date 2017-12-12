/**
 *  created by ling on 2017-12-12 13:35.
 */

import React from "react";
import {connect} from "react-redux";

import {Button, List, InputItem, WingBlank, WhiteSpace} from 'antd-mobile';
import Auth from "./Auth";

import {cart} from "../reducers/cart";
import {addCart, decCart} from "../actions/cart";


@connect(
    cart,
    {addCart, decCart}
)
class Cart extends React.Component {

    render() {
        console.log("cart", this.props)
        return (
            <div>
                <WingBlank>
                    {/*<Auth />*/}
                    <Button size="small" inline onClick={()=>{this.props.decCart("减1")}}>-</Button>
                    <span>{this.props.cart.num}</span>
                    <Button size="small" inline onClick={()=>{this.props.addCart("加1")}}>+</Button>
                </WingBlank>
            </div>
        )
    }
}


export default Cart;