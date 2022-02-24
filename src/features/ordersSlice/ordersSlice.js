import { ADDTOORDERS, DELETEFROMORDERS } from "../../store/types";

export function ordersReducer(state = [], action){

    switch(action.type){
        case ADDTOORDERS: {
            state.push(action.payload)
            return state
        }
        case DELETEFROMORDERS: {
            return Object.assign([], state.filter(elem => elem !== action.payload))
        }
        default:
            return state
    }
}

export const initialorders = [];


export function getOrders(state){
    return state.orders
}