/**
 *  created by ling on 2017-12-12 13:45.
 */

const ADD_CART = "ADD_CART";
const DEC_CART = "DEC_CART";

export function addCart(text) {
    return ({type: ADD_CART, status: text})
}

export function decCart(text) {
    return ({type: DEC_CART, status: text})
}