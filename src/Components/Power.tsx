import React, { useState, useEffect } from 'react';
import EventEmitter from "../utils/EventEmit"


type PowerListProps = {

    powers: {
        title: string
        price: number
    }[]

}

export const Power = (props: PowerListProps) => {

    const [selectedPower, setPower] = useState<string>('100 MW');
    const [powerPrice, setPowerPrice] = useState(0);


    const createNewPwrPrice = () => {
        // (identifier, data for event)
        EventEmitter.emit('NewPowerPrice', powerPrice)
    }

    //create new log after state change
    useEffect(() => {
        createNewPwrPrice();
    })



    return (
        <div >
            
            {props.powers.map(power => {
                return (
                    <button
                        className={selectedPower === power.title ? 'pwrBtnClicked' : 'pwrBtnNotClicked'} key={power.title}
                        onClick={() => {
                            setPower(power.title)
                            setPowerPrice(power.price)
                        }}>
                        {power.title} <br /> +{power.price}€</button>
                )
            })}
        </div>
    )
}