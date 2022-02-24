import {combineReducers, createStore} from "redux"
import { initialorders, ordersReducer } from "../features/ordersSlice/ordersSlice"

const store = createStore(combineReducers({
    orders: ordersReducer
}), {
    orders: initialorders
})

export default store