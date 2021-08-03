import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import productReducer from "./product_redicer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    product: productReducer
})

export default entitiesReducer;