import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
import Modal from "react-modal"
import Order from "./Order/Order"
import "./Trading.scss"


    function Trading(){
        const [currentTime, setCurrentTime] = useState("")
        const [isModalOpen, setIsModalOpen] = useState(false)
        const [currencies, setCurrencies] = useState("USD/AMD")
        const [orderInfo, setOrderInfo] = useState({})
        let date = new Date()

        let timer = setInterval(() => {
            let hours = date.getHours()
            let minutes = date.getMinutes()
            let seconds = date.getSeconds()

            if(hours >= 0 && hours < 10){
                hours = "0" + hours
            }

            if(minutes >= 0 && minutes < 10){
                minutes = "0" + minutes
            }

            if(seconds >= 0 && seconds < 10){
                seconds = "0" + seconds
            }

            setCurrentTime(`${hours}:${minutes}:${seconds}`)
            clearInterval(timer)
        }, 1000)

        useEffect(() => {

            let hours = date.getHours()
            let minutes = date.getMinutes()
            let seconds = date.getSeconds()

            if(hours >= 0 && hours < 10){
                hours = "0" + hours
            }

            if(minutes >= 0 && minutes < 10){
                minutes = "0" + minutes
            }

            if(seconds >= 0 && seconds < 10){
                seconds = "0" + seconds
            }

            setCurrentTime(`${hours}:${minutes}:${seconds}`)
        }, [])

        const currency = {
            "USD/AMD": {buy:"485", sell:"480", id:"1"},
            "EURO/AMD": {buy:"570", sell:"500", id:"2"},
            "GBP/RUS": {buy:"8.148", sell:"7.148", id:"3"},
            "RUS/AMD": {buy:"6.7845", sell:"6", id:"4"},
            "INR/CAD": {buy:"1.4515", sell:"1.1547", id:"5"}
        }

        const buyHandleClick = () => {
            setIsModalOpen(true)
            setOrderInfo({
                action: "buy",
                currencies: currencies,
                currency: currency[currencies]?.buy
            })
        }

        const sellHandleClick = () => {
            setIsModalOpen(true)
            setOrderInfo({
                action: "sell",
                currencies: currencies,
                currency: currency[currencies]?.sell
            })
        }

        
        return(
            <div>
                <div className="trading">
                    <div className="trading_timeAndCurrency">
                        <div className="trading_timeAndCurrency_currentTimeDiv">
                            <h1>{currentTime}</h1>
                        </div>
                        <select className="trading_timeAndCurrency_currency" onChange={(evt) => setCurrencies(evt.target.value)}>
                            {
                                Object.keys(currency).map(elem => {
                                    return (
                                        <option key={currency[elem].id}>{elem}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="buyAndSell">
                        <div className="buyAndSell_buyDiv" onClick={buyHandleClick}>
                            <h2 className="buyAndSell_buyDiv_H2">BUY</h2>
                            <h2 className="buyAndSell_buyDiv_H2">{currency[currencies]?.buy}</h2>
                        </div>
                        <div className="buyAndSell_sellDiv" onClick={sellHandleClick}>
                            <h2 className="buyAndSell_sellDiv_H2">SELL</h2>
                            <h2 className="buyAndSell_sellDiv_H2">{currency[currencies]?.sell}</h2>
                        </div>
                    </div>
                </div>
                <Modal isOpen={isModalOpen} className="orderModal">
                    <Order orderInfo={orderInfo} isModalOpen={() => setIsModalOpen(false)}/>
                </Modal>
            </div>
        )
    }

export default Trading