import { ADDTOORDERS, DELETEFROMORDERS } from "../types";

export const addToOrders = (data) => ({
    type: ADDTOORDERS,
    payload: data
})

export const deleteFromOrders = (data) => ({
    type: DELETEFROMORDERS,
    payload: data
})