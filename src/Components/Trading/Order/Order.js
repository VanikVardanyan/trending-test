import Moment from 'react-moment';
import moment from 'moment';
import { nanoid } from "nanoid"
import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { ordersReducer } from "../../../features/ordersSlice/ordersSlice"
import { addToOrders } from "../../../store/actions"
import Button from "./Button/Button"
import Input from "./Input/Input"
import "./Order.scss"

    function Order({ isModalOpen, orderInfo }){

        const [valume, setValume] = useState("")
        const [submit, setSubmit] = useState(false)
        const start = moment().add(-4, 'm');
        const dispatch = useDispatch(ordersReducer)

        const orderAdmitting = () => {
            setSubmit(true)
            if(valume.length){
                dispatch(addToOrders({
                    valume: valume, 
                    date: <Moment date={start} format="DD/MM/YY"/>, 
                    id: nanoid(),
                    ...orderInfo
                }))
                isModalOpen()
            }
        }

        const handleChange = (evt) => {
            if(!isNaN(evt.target.value)){
                setValume(evt.target.value)
            }
        }

        return(
            <div>
                <div className="orderNavBar">
                    <h4 className="orderNavBar_makeOrderTitle">Make order</h4>
                    <button className="orderNavBar_orderCloseBtn" onClick={() => isModalOpen()}>X</button>
                </div>
                <div className="orderInfoDiv">
                    <div className="orderInfoDiv_orderInfo">
                        <h3 style={orderInfo.action === "sell"?{color:"red"}:{color:"green"}}>{orderInfo.action}</h3>
                        <h3>{orderInfo.currencies}</h3>
                        <h3>{orderInfo.currency}</h3>
                    </div>
                    <div className="orderInfoDiv_valumeDiv">
                        <span>Valume</span>
                        <Input type="text" isError={submit && !valume.length} className={"valumeInp"} onChange={handleChange} placeholder="valume"/>
                    </div>
                </div>
                <div className="btnsDiv">
                    <div className="btnsDiv_btns">
                        <Button styles={{backgroundColor:"blue"}} className={"orderBtns"} onClick={() => isModalOpen()} text="Cancel" bgCOLOR={"blue"}/>
                        <Button className={"orderBtns"} onClick={orderAdmitting} text="OK"/>
                    </div>
                </div>
            </div>
        )
    }

export default Order