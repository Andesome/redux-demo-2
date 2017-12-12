/**
 *  created by ling on 2017-12-12 14:30.
 */

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";

export function loginSuccess() {
    return {type:LOGIN_SUCCESS}
}

export function loginFail() {
    return {type:LOGIN_FAIL}
}