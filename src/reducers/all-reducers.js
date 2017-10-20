import {combineReducers} from "redux";
import PinsReducer from './reducer-pins';


const allReducers = combineReducers({
    pins: PinsReducer
});

export default allReducers