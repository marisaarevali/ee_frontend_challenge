import React, { useState, useEffect } from 'react';
import EventEmitter from "../utils/EventEmit"

//declare types 
type ColorListProps = {
    colors: {
        title: string
        price: number
    }[]
}
export const Color = (props: ColorListProps) => {

    const [selectedColor, setColor] = useState('Snow');
    const [colorPrice, setColorPrice] = useState(0);
    const createColorPrice = () => {
        // (identifier, data for event)
        EventEmitter.emit('NewColorPrice', colorPrice)
    }
    //create new log after state change
    useEffect(() => {
        createColorPrice();
    })

    return (
        <div>
            {props.colors.map(color => {
                return (
                    <button className={selectedColor === color.title ? 'clr-clicked' : 'clr-not-clicked'} 
                        key={color.title}
                        onClick={() => {
                            setColor(color.title)
                            setColorPrice(color.price)
                        }}>
                        <div className={color.title} ></div>
                        +{color.price}€ <br/>{color.title}</button>
                )
            })}
        </div>
    )

}


