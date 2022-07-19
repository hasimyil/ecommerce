
import { logging } from "../../helpers/Functions";
import { types } from "../action/actionTypes"

const initialState ={
    loadApp:true,
    navScreen:''
}


export default (state= initialState, action) =>{
    logging("ScreenReducer state = " ,  action);
    switch(action.type){
        case types.REQUEST_INIT:
            return {
                ...state,
                loadApp:false
            }
        case types.SUCCESS_INIT:
            return {
                ...state,
                loadApp:true,
                navScreen: action.payload.navigateScreen
            }
        default:
            return state
    }
}