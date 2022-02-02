import React, { useState, useEffect } from 'react';
import EventEmitter from "../utils/EventEmit"

type OptionListProps = {
    options: {
        title: string
        price: number
        includes: string[]
    }[]
}

export const Option = (props: OptionListProps) => {

    const [selectedOption, setOption] = useState<string>('Basic');
    const [optionPrice, setOptionPrice] = useState(0);

    const createOptionPrice = () => {
        // (identifier, data for event)
        EventEmitter.emit('NewOptionPrice', optionPrice)
    }

    //create new log after state change
    useEffect(() => {
        createOptionPrice();
    })









    return (
        <div className='select-box'>
            <p className='select-text'>Select option package:</p>
            <div className='optionPackageBtn'>
                {props.options.map(option => {
                    return (
                        <li
                            className={selectedOption === option.title ? 'optBtnClicked' : 'optBtnNotClicked'} key={option.title}
                            onClick={() => {
                                console.log(option.title)
                                setOption(option.title)
                                setOptionPrice(option.price)
                                
                            }}>
                            <div className='optionTitle'>{option.title} <br/> +{option.price}€</div>

                            <div className='optionIcon'>
                                <div className='optionIconText'>
                                    <div className='textonthebutton'> 
                                    {option.includes.map((include) => <p className='includesText'>▲ {include}</p>
                                )}
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}</div>
            {/* <p>selected: {selectedOption}</p> */}
        </div>
    )

}