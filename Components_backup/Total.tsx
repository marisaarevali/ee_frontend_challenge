import React, { useState } from 'react';
import { Color } from './Color';


type TotalProps = {
    totals: {
        basePrice: number
        colorPrice: number
        powerPrice: number
        warpPrice: number
        optionPrice: number
}[]
}



export const Total = (props: TotalProps) => {

    const [sum, setSum] = useState(1000);


    return (
        <div className='totalBox'>
            <p>total {sum}</p>
        </div>
    )

}