import React , {useState} from 'react';
import {Link} from 'react-router-dom'
const Register = ()=>{
    const [form, setform] = useState({})
    const handleSubmit=(event)=>{
        event.preventDefault();
    }
    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setform({...form,[name]:value})
    }
    return (
        <div className="register">
            <form className="form" onSubmit={handleSubmit} method="POST">
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Mobile</label>
                    <input type="password" className="form-control"  name="password" onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">National ID</label>
                    <input type="national_id" className="form-control"  name="national_id" onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </div>
                <div className="footer pb-0">
                    <p>Already have an account?
                        <Link to="/login" className="color-primary ms-2">Log in</Link>
                    </p>
                </div>
                
            </form>
        </div>
    )
}
export default Register;