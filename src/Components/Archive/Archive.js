import { useDispatch, useSelector } from "react-redux"
import { getOrders, ordersReducer } from "../../features/ordersSlice/ordersSlice"
import { deleteFromOrders } from "../../store/actions"
import "./Archive.scss"

    function Archive(){

        const orders = useSelector(getOrders)
        const dispatch = useDispatch(ordersReducer)

        const onDeleteOrder = (order) => {
            dispatch(deleteFromOrders(order))
        }

        return(
            <div style={{color:"gray"}}>
                <table className="archiveTable">
                    <tbody>
                        <tr className="archiveTable_tableHeaders">
                            <td>Side</td>
                            <td>Price</td>
                            <td>Instrument</td>
                            <td>Valume</td>
                            <td>Timestamp</td>
                            <td></td>
                        </tr>
                    </tbody>
                    {
                        orders.map(elem => {
                            return (
                                <tbody key={elem.id}>
                                    <tr>
                                        <th style={elem.action === "sell"?{color:"red"}:{color:"green"}}>{elem.action}</th>
                                        <th>{elem.currency}</th>
                                        <th>{elem.currencies}</th>
                                        <th>{elem.valume}</th>
                                        <th>{elem.date}</th>
                                        <th className="archiveTable_orderDeleteBtn" onClick={() => onDeleteOrder(elem)}>X</th>
                                    </tr>   
                                </tbody>
                            )
                        })
                    }
                </table>
            </div>
        )
    }

export default Archive