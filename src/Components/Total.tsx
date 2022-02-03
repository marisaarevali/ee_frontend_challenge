import React, { useState, useEffect } from 'react';
import EventEmitter from "../utils/EventEmit"


export const Total = () => {

    //color price
    const [logs, setLogs] = useState(0)

    useEffect(() => {
        const onNewLog = (eventData: any) => {
            setLogs(eventData)
            console.log(logs)
        }
        const listener = EventEmitter.addListener('NewLog', onNewLog)
        return () => {
            listener.remove();
        }
    })

    //power price
    const [powerPrice, setPowerPrice] = useState(0)
    useEffect(() => {
        const onPowerPrice = (eventData: any) => {
            setPowerPrice(eventData)
            console.log(powerPrice)
        }
        const listener = EventEmitter.addListener('NewPowerPrice', onPowerPrice)
        return () => {
            listener.remove();
        }
    })

    //warp drive
    const [warpPrice, setWarpPrice] = useState(0)
    useEffect(() => {
        const onWarpPrice = (eventData: any) => {
            setWarpPrice(eventData)
            console.log(warpPrice)
        }
        const listener = EventEmitter.addListener('NewWarpPrice', onWarpPrice)
        return () => {
            listener.remove();
        }
    })

    //option price
    const [optionPrice, setOptionPrice] = useState(0)
    useEffect(() => {
        const onOptionPrice = (eventData: any) => {
            setOptionPrice(eventData)
            console.log(optionPrice)
        }
        const listener = EventEmitter.addListener('NewOptionPrice', onOptionPrice)
        return () => {
            listener.remove();
        }
    })


    const [basePrice, setBasePrice] = useState(1000)







    return (
        <div>
            <div className='totalBox'>
                <div className='totalsText'>
                    <p className='totalsPrice'>Base price: <span className='white'>{basePrice}€</span></p>
                    <p className='totalsPrice'>Color:<span className='white'> +{logs}€</span></p>
                    <p className='totalsPrice'>Power: <span className='white'>+{powerPrice}€</span></p>
                    <p className='totalsPrice'>Warp drive:<span className='white'>+{warpPrice}€</span> </p>
                    <p className='totalsPrice'>Option package:<span className='white'>+{optionPrice}€</span> </p>
                    <div className='divide'></div>
                    <p className='totalsPrice total'> Total: <span className='white'>{basePrice+optionPrice+warpPrice+powerPrice+logs}</span></p>
                </div>


                   
            </div>
        </div>

    )

}