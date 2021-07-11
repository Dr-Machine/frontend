import React from 'react';

const Upload =({ match })=>{
    return (
        <div className="upload">
           <div className="monitor">
                <div className="scan"></div>
                <div className="screen"></div>
            </div>
            <div className="send">
                <label>
                    <input type="file"/>
                    <span>upload</span>
                </label>
            </div>
            
        </div>
    )
}
export default Upload;