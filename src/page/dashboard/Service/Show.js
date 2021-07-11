import React , {useEffect,useState} from 'react';
import axios from 'axios';
import {baseurl} from '../../../index'
const Show =({name})=>{
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`${baseurl}/services/${name}`,{
            headers : {
                Authorization : "Bearer "+localStorage.getItem("token"),
            }
        })
        .then(function (response) {
            if(typeof response.data==="object"){
                setData(response.data)
            }
            else{
                return Promise.reject(response.body.detail)
            }
        })
        .catch(function (error) {
            alert(error)
        })
    }, [name])
    return (
        <div className="show">
            <div class="table-responsive">
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">timestamp</th>
                    <th scope="col">is_deleted</th>
                    <th scope="col">patient id</th>
                    <th scope="col">patient sex</th>
                    <th scope="col">patient age</th>
                    <th scope="col">upper_left</th>
                    <th scope="col">upper_right</th>
                    <th scope="col">lower_left</th>
                    <th scope="col">lower_right</th>
                    <th scope="col">lower_middle</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,key)=>
                        <tr key={key}>
                            <th scope="row">{key+1}</th>
                            <td>{item.timestamp?.toString()}</td>
                            <td>{item.is_deleted?.toString()}</td>
                            <td>{item.patient_id?.toString()}</td>
                            <td>{item.patient_sex?.toString()}</td>
                            <td>{item.patient_age?.toString()}</td>
                            <td>{item.upper_left?.toString()}</td>
                            <td>{item.upper_right?.toString()}</td>
                            <td>{item.lower_left?.toString()}</td>
                            <td>{item.lower_right?.toString()}</td>
                            <td>{item.lower_middle?.toString()}</td>
                        </tr>
                    )}
                </tbody>
                </table>
            </div>
        </div>
    )
}
export default Show;