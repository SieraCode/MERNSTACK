
import * as actionTypes from "../actionTypes";

let initialState = {
    user : {
    
    }
}

let userReducer = (state=initialState, action)=>{

    console.log("User Actions ", action)

    switch (action.type) {

        case actionTypes.ADDUSERTOSTORE:
            return {...state, user: action.payload} 
        default:
            return state //if no action type matched return default state
    }
}

export default userReducer;