import React , {useState} from 'react';
import {Link} from 'react-router-dom'
const Login = ()=>{
    const [form, setform] = useState({})
    const handleSubmit=(event)=>{
        event.preventDefault();
        localStorage.setItem("token",form.email)
    }
    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setform({...form,[name]:value})
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