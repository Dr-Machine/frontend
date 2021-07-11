import React from 'react';
import {
    Route,
  } from "react-router-dom";

import Upload from './Service/Upload';
import Show from './Service/Show';


const Service =({ match })=>{
    return (
        <div className="service">
            <Route path={`${match.url}/upload`}><Upload name={match.params.id}/></Route>
            <Route path={`${match.url}/show`}><Show name={match.params.id}/></Route>
        </div>
    )
}
export default Service;