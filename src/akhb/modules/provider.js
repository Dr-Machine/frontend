import React , {cloneElement} from 'react';


const Provider = ({children,store})=>{
    const state = store.state;
    const action = store.action;
    console.log("Provider modules", store);
    return (
        <div className="mood">
            {cloneElement(children, {state,action})}
        </div>
    )
}

export default Provider;