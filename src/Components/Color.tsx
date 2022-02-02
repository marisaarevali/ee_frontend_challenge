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


    const createNewLog = () => {
        // (identifier, data for event)
        EventEmitter.emit('NewLog', colorPrice)
    }

    //create new log after state change
    useEffect(() => {
        createNewLog();
    })




    return (
        <div className='select-box'>
            <p className='select-text'>Select color:</p>
            {props.colors.map(color => {
                return (
                    <button
                        className={selectedColor === color.title ? 'clrBtnClicked' : 'clrBtnNotClicked'} key={color.title}
                        onClick={() => {
                            setColor(color.title)
                            setColorPrice(color.price)
                            
                        }}>
                        <div className={color.title} ></div>
                        +{color.price}€ <br /> {color.title}  </button>
                )
            })}




        </div>
    )

}


