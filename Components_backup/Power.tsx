import React, { useState } from 'react';


type PowerListProps = {
  
    powers: {
        title: string
        price: number
    }[]
    
}

export const Power = (props: PowerListProps) => {

    const [selectedPower, setPower] = useState<string>('100 MW');
    const [clickedOn, setClick] = useState('pwrBtnNotClicked');



    return (
        <div className='select-box'>
            <p className='select-text'>Select power:</p>
            {props.powers.map(power => {
                return (
                    <button 
                        className={selectedPower === power.title ? 'pwrBtnClicked' : 'pwrBtnNotClicked'} key={power.title} 
                        onClick={() => {
                            console.log(power.title)
                            setPower(power.title)
                            if (power.title === selectedPower) {
                                setClick(selectedPower)
                                console.log(clickedOn)
                            }

                        }}>
                        {power.title} <br/> +{power.price}€</button>
                )
            })}
            {/* <p>selected: {selectedPower}</p> */}
        </div>
    )

}