import React, { useState } from 'react';
import { Total } from './Total';

type PowerListProps = {
  
    powers: {
        title: string
        price: number
    }[]
    
}

export const Power = (props: PowerListProps) => {

    const [selectedPower, setPower] = useState<string>('100 MW');



    return (
        <div className='select-box'>
            <p className='select-text'>Select power:</p>
            {props.powers.map(power => {
                return (
                    <button className='power-btn' key={power.title} onClick={() => setPower(power.title)}>
                        {power.title} {power.price}</button>
                )
            })}
            {/* <p>selected: {selectedPower}</p> */}
        </div>
    )

}