import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import uiErrorsReducer from "./ui_errors_reducer";


const errorsReducer = combineReducers({
    sessionErrors: sessionErrorsReducer,
    uiErrors: uiErrorsReducer
})

export default errorsReducer;