import React, { useState } from 'react';

//declare types 
type ColorListProps = {
    colors: {
        title: string
        price: number
    }[]
}

export const Color = (props: ColorListProps) => {

    const [selectedColor, setColor] = useState('Snow');

    return (
        <div className='select-box'>
            <p className='select-text'>Select color:</p>
            {props.colors.map(color => {
                return (
                    <button className='color-btn' key={color.title} onClick={() => setColor(color.title)}><div className={color.title} ></div>
                       +{color.price}€ <br/> {color.title}  </button>
                
                )
            })}
            {/* <p>selected: {selectedColor}</p> */}
        </div>
    )

}