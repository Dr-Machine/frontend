import React , {useState} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import {baseurl} from '../../index'
const Login = ({history})=>{
    const [form, setform] = useState({})
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post(`${baseurl}/auth/jwt/create/`, form)
        .then(function (response) {
            if(response.status===200){
                localStorage.setItem("token",response.data.access);
                fetchUser()
                history.push("/dashboard");
            }
            else{
                return Promise.reject(response.body.detail)
            }
        })
        .catch(function (error) {
            alert(error)
        });
    }
    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setform({...form,[name]:value})
    }
    const fetchUser = ()=>{
        axios.get(`${baseurl}/accounts/info/`,{
            headers : {
                Authorization : "Bearer "+localStorage.getItem("token"),
            }
        })
        .then(function (response) {
            if(response.status===200){
                localStorage.setItem("user",response.data.id)
            }
            else{
                return Promise.reject(response.body.detail)
            }
        })
        .catch(function (error) {
            alert(error)
        })
    }
    return (
        <div className="login">
            <form className="form" onSubmit={handleSubmit} method="POST">
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </div>
                <div className="mb-3 text-center">
                    <Link to="/forgetpass" className="color-primary ms-2">Forget password</Link>
                </div>
                <div className="footer pb-0">
                    <p>Don't have an account?
                        <Link to="/register" className="color-primary ms-2">Register</Link>
                    </p>
                </div>
                
            </form>
        </div>
    )
}
export default Login;