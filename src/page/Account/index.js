import React ,{useEffect} from 'react';
import {
    Route
} from "react-router-dom";
import Navbar from '../Navbar'

import Login from './Login'
import Register from './Register'
import ForgetPass from './ForgetPass'

const Account = ({history})=>{
    useEffect(() => {
        if(localStorage.getItem("token")){
            history.push("/dashboard")
        }
    }, [localStorage.getItem("token")])
    return (
        <div className="account">
            <Navbar/>
            <div className="content">
                <div className="box">
                    <div className="head">Dr. Machine</div>
                    <Route exact path={`/login`} component={Login} />
                    <Route exact path={`/register`} component={Register} />
                    <Route exact path={`/forgetpass`} component={ForgetPass} />
                </div>
            </div>
            <div className="footer">
                <p>Copyright 2021 <span className="color-primary">Dr.Machine</span></p>
            </div>
        </div>
    )
}
export default Account;