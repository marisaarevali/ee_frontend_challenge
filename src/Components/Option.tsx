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
    const [optionPrice, setOptionPrice] = useState<any>(0);

    const createOptionPrice = () => {
        // (identifier, data for event)
        EventEmitter.emit('NewOptionPrice', optionPrice)
    }

    //create new log after state change
    useEffect(() => {
        createOptionPrice();
    })









    return (
        <div >

            <div className='optionPackageBtn'>
                {props.options.map(option => {
                    return (
                        <div className={selectedOption === option.title ? 'optBtnClicked' : 'optBtnNotClicked'} key={option.title}
                            onClick={() => {
                                setOption(option.title)
                                setOptionPrice(option.price)
                            }}>
                            <div className='optionTitle'>{option.title} <br /> +{option.price}€</div>
                            <div className='optionIcon'>
                            {option.includes.map((include) => <li>▲ {include}</li>
                            )}
                            </div>
                        </div>
                    )
                })}</div>
        </div>
    )

}