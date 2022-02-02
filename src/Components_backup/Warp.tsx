import React, { useState } from 'react';
type WarpListProps = {
    warpDrive: {
        title: string
        price: number
    }[]
}

export const Warp = (props: WarpListProps) => {

    const [selectedWarp, setWarp] = useState<string>('NO');

    return (
        <div className='select-box'>
            <p className='select-text'>Select Warp:</p>
            {props.warpDrive.map(warp => {
                return (
                    <button key={warp.title} onClick={() => setWarp(warp.title)}>
                        {warp.title} {warp.price}</button>
                )
            })}
            {/* <p>selected: {selectedWarp}</p> */}
        </div>
    )

}