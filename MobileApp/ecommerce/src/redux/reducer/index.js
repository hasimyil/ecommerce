import { combineReducers } from "redux";
import MainScreenReducer from "./MainScreenReducer";


const Reducers = combineReducers({
    mainScreenInit: MainScreenReducer
})

export default Reducers;
