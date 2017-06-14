//CODE GOES HERE
import {FETCH_WEATHER} from "../actions/index";

export default function(state=[], action){
    if (action.error) {
        action.type = "HANDLE_ERROR";
    }
    switch(action.type) {
        case "HANDLE_ERROR":
            console.log("ERROR OCCURED IN PROMISE");
            return state;
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
        default:
            return state;
    }
}
//CODE GOES HERE

//CODE GOES HERE

//CODE GOES HERE
