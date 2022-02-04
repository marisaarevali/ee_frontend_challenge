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
        EventEmitter.emit('NewOptionPrice', optionPrice)
    }
    useEffect(() => {
        createOptionPrice();
    })
    return (
        <div >
            <div className='option-package-btn'>
                {props.options.map(option => {
                    return (
                        <div className={selectedOption === option.title ? 'opt-clicked' : 'opt-not-clicked'} key={option.title}
                            onClick={() => {
                                setOption(option.title)
                                setOptionPrice(option.price)
                            }}>
                            <div className='option-title-text'>{option.title} <br /> +{option.price}€</div>
                            <div className='option-icon'>
                                {option.includes.map((include) => <li>▲ {include}</li>
                                )}
                            </div>
                        </div>
                    )
                })}</div>
        </div>
    )

}