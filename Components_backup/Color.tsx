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
    const [clickedOn, setClick] = useState('clrBtnNotClicked');
    console.log(props)

    return (
        <div className='select-box'>
            <p className='select-text'>Select color:</p>
            {props.colors.map(color => {
                return (
                    <button 
                        className={selectedColor === color.title ? 'clrBtnClicked' : 'clrBtnNotClicked'} key={color.title}
                        onClick={() => {
                            console.log(color.title)
                            setColor(color.title) //see siin on vaja saata
                            if (color.title === selectedColor) {
                                setClick(selectedColor)
                                console.log(clickedOn)
                            }
                            
                        }}>
                        <div className={color.title} ></div>
                        +{color.price}€ <br /> {color.title}  </button>  
                )
            })}



            <div>{selectedColor}</div>
        </div>
    )

}


