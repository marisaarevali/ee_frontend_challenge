import React, { useState } from 'react';
type OptionListProps = {
    options: {
        title: string
        price: number
        includes: string[]
    }[]
}

export const Option = (props: OptionListProps) => {

    const [selectedOption, setOption] = useState<string>('Basic');

    return (
        <div className='select-box'>
            <p className='select-text'>Select option package:</p>
            {props.options.map(option => {
                return (
                    <button key={option.title} onClick={() => setOption(option.title)}>
                        {option.title} {option.price} {option.includes}</button>
                )
            })}
            {/* <p>selected: {selectedOption}</p> */}
        </div>
    )

}