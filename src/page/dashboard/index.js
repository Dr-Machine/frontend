import React ,{useState,useEffect} from 'react';
import {
    Route,Link,NavLink
  } from "react-router-dom";
import Navbar from '../Navbar'
import {ArrowRight,ArrowLeft} from '../../assets/images/'
import Service from './Service'
const Dashboard =({ match ,history })=>{
    const [active, setActive] = useState(false);
    const onclick=(ev,value)=>{
        ev.preventDefault();
        if(value===active){
            setActive(false)
        }
        else{
            setActive(value)
        }
    }
    const [openSidebar, setOpenSidebar] = useState(false);

    useEffect(() => {
        if(!localStorage.getItem("token")){
            history.push("/login")
        }
    }, [history])
    return (
        <div className="dashboard">
            <Navbar/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-auto ps-0 pe-0 pe-sm-3 pe-md-4">
                        <div className={`sidebar ${openSidebar?"active":""}`}>
                            <div className="overlay"></div>
                            <div className="toggler">
                                <button onClick={()=>setOpenSidebar(!openSidebar)}>
                                {openSidebar?
                                    <ArrowLeft width="24" height="24" fill="#fff"/>
                                :
                                    <ArrowRight width="24" height="24" fill="#fff"/>
                                }
                                </button>
                            </div>
                            <ul className="nav flex-column">
                                <li className={`nav-item has-submenu ${active===1?"show":""}`}>
                                    <Link to="/" className="nav-link" onClick={(ev)=>onclick(ev,1)}>CT_LIS</Link>
                                    <ul className="submenu collapse">
                                        <li><NavLink className="nav-link" to={`/dashboard/service/CT_LIS/upload`}>upload</NavLink></li>
                                        <li><NavLink className="nav-link" to="/dashboard/service/CT_LIS/show">show</NavLink></li>
                                    </ul>
                                </li>
                                <li className={`nav-item has-submenu ${active===2?"show":""}`}>
                                     <Link to="/" className="nav-link" onClick={(ev)=>onclick(ev,2)}>ai_corona</Link>
                                    <ul className="submenu collapse">
                                    <li><NavLink className="nav-link" to="/dashboard/service/ai_corona/upload">upload</NavLink></li>
                                        <li><NavLink className="nav-link" to="/dashboard/service/ai_corona/show">show</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col pe-0 ps-0 ps-sm-3 ps-md-4">
                        <div className="content">
                            <Route path={`${match.url}/service/:id`} component={Service} />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="footer">
                            <p>Copyright 2021 <span className="color-primary">Dr.Machine</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;