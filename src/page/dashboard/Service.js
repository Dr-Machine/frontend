import React from 'react';
import {
    Route,
  } from "react-router-dom";

import Upload from './Service/Upload';
import Show from './Service/Show';


const Service =({ match })=>{
    return (
        <div className="service">
            <Route path={`${match.url}/upload`} component={Upload} />
            <Route path={`${match.url}/show`} component={Show} />
        </div>
    )
}
export default Service;