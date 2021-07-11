import React ,{useState} from 'react';
import {Link} from 'react-router-dom'
const Forgetpass = ()=>{
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
        <div className="forgetpass" onSubmit={handleSubmit} method="POST">
            <form className="form">
                <div className="mb-3">
                    <label className="form-label">Email or Mobile</label>
                    <input type="text" className="form-control" name="email" onChange={handleChange} required/>
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
export default Forgetpass;