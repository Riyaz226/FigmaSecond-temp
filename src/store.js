import {createStore} from "redux"
//import rootred from "./Redux/reducers/main"
import rootReducer from "./Redux/reducers/main"

const store = createStore(
    rootReducer
);

export default store;