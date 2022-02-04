import React, { useState, useEffect } from 'react';
import EventEmitter from "../utils/EventEmit"


export const Total = () => {

    const [colorPrice, setColorPrice] = useState(0)
    useEffect(() => {
        const onColorPrice = (eventData: any) => {
            setColorPrice(eventData)
        }
        const listener = EventEmitter.addListener('NewColorPrice', onColorPrice)
        return () => {
            listener.remove();
        }
    })

    const [powerPrice, setPowerPrice] = useState(0)
    useEffect(() => {
        const onPowerPrice = (eventData: any) => {
            setPowerPrice(eventData)
        }
        const listener = EventEmitter.addListener('NewPowerPrice', onPowerPrice)
        return () => {
            listener.remove();
        }
    })

    const [warpPrice, setWarpPrice] = useState(0)
    useEffect(() => {
        const onWarpPrice = (eventData: any) => {
            setWarpPrice(eventData)
        }
        const listener = EventEmitter.addListener('NewWarpPrice', onWarpPrice)
        return () => {
            listener.remove();
        }
    })

    const [optionPrice, setOptionPrice] = useState(0)
    useEffect(() => {
        const onOptionPrice = (eventData: any) => {
            setOptionPrice(eventData)
        }
        const listener = EventEmitter.addListener('NewOptionPrice', onOptionPrice)
        return () => {
            listener.remove();
        }
    })

    const [basePrice, setBasePrice] = useState(1000)

    return (
        <div>
            <div className='total-box'>
                <div className='totals-text'>
                    <p className='totals-price'>Base price: <span className='white'>{basePrice}€</span></p>
                    <p className='totals-price'>Color:<span className='white'> +{colorPrice}€</span></p>
                    <p className='totals-price'>Power: <span className='white'>+{powerPrice}€</span></p>
                    <p className='totals-price'>Warp drive:<span className='white'>+{warpPrice}€</span> </p>
                    <p className='totals-price'>Option package:<span className='white'>+{optionPrice}€</span></p>
                    <div className='divide'></div>
                    <p className='totals-price total'>
                        Total: <span className='white'>
                            {basePrice + optionPrice + warpPrice + powerPrice + colorPrice}
                        </span></p>
                </div>
            </div>
        </div>
    )
}