import {cteateSlice} from '../modules/';
import {fiatdeposit} from './client/'
console.log({fiatdeposit});
const client = cteateSlice({
    name : "client",
    state : {
        pages : {
            fiatdeposit:fiatdeposit.state,
        },
    },
    action : {

    }
    
})

const state = client.state;
const action = client.action;

export default {state,action}