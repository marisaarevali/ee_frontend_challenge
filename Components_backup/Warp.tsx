import React, { useState } from 'react';
type WarpListProps = {
    warpDrive: {
        title: string
        price: number
    }[]
}

export const Warp = (props: WarpListProps) => {

    const [selectedWarp, setWarp] = useState('No');
    const [clickedOn, setClick] = useState('warpBtnNotClicked');

    return (
        <div className='select-box'>
            <p className='select-text'>Select Warp:</p>
            {props.warpDrive.map(warp => {
                return (
                    <button className={selectedWarp === warp.title ? 'warpBtnClicked' : 'warpBtnNotClicked'} key={warp.title} 
                    onClick={() => {
                        setWarp(warp.title)
                        if (warp.title === selectedWarp) {
                            setClick(selectedWarp)
                            console.log(clickedOn)
                        }
                    }
                    }>
                        {warp.title} <br/> +{warp.price}€</button>
                )
            })}
            {/* <p>selected: {selectedWarp}</p> */}
        </div>
    )

}