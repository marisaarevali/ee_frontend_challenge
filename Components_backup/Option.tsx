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
    const [clickedOn, setClick] = useState('optBtnNotClicked');

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
                                if (option.title === selectedOption) {
                                    setClick(selectedOption)
                                    console.log(clickedOn)
                                }
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