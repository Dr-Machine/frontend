import React , {useState,} from 'react';
import axios from 'axios';
import {baseurl} from '../../../index'
const Upload =({name})=>{
    const [file, setFile] = useState("");
    const [loading, setLoading] = useState(false);
    const handleChange = (ev)=>{
        const file = ev.target.file[0];
        setFile(file);
    }
    const handleSubmit = ()=>{
        const form = new FormData();
        form.append("prescriber",localStorage.getItem("user"))
        form.append("file",file)
        setLoading(true);
        axios.post(`${baseurl}/services/${name}`,form,{
            headers : {
                Authorization : "Bearer "+localStorage.getItem("token"),
            }
        })
        .then(function (response) {
            if(response.status===200){
                console.log("jhkjhkhkjh");
            }
            else{
                return Promise.reject(response.body.detail)
            }
            setLoading(false)
        })
        .catch(function (error) {
            alert(error)
        })
    }
    return (
        <div className="upload">
           <div className={`monitor ${loading? "active":""}`}>
                <div className="scan"></div>
                <div className="screen"></div>
            </div>
            <div className="send">
                <label>
                    <input type="file" onChange={handleChange}/>
                    <span onClick={handleSubmit}>upload</span>
                </label>
            </div>
            
        </div>
    )
}
export default Upload;