import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import productReducer from "./product_redicer";
import reviewReducer from "./reviews_reducer";
import cartReducer from "./cart_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    cart: cartReducer,
    product: productReducer,
    reviews: reviewReducer
})

export default entitiesReducer;