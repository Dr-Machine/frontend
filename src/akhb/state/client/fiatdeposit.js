import {cteateSlice} from '../../modules/';
const fiatdeposit = cteateSlice({
    name : "fiatdeposit",
    state : {
        history : "history"
    },
    action : {
        fetch :async (state)=>{
            state.history = ["1","2"]
        }
    }
    
})

const state = fiatdeposit.state;
const action = fiatdeposit.action;

export default {state,action}