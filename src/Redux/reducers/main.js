import {combineReducers} from "redux"
//import { cartreducer } from "./reducer"
import { sidebar } from "./reducer"

const rootReducer = combineReducers({
    sidebar:sidebar,
});

export default rootReducer

// const rootred = combineReducers({
//     cartreducer
// });

//export default rootred