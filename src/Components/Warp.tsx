import React, { useState, useEffect } from 'react';
import EventEmitter from "../utils/EventEmit"

type WarpListProps = {
    warpDrive: {
        title: string
        price: number
    }[]
}
export const Warp = (props: WarpListProps) => {

    const [selectedWarp, setWarp] = useState('NO');
    const [warpPrice, setWarpPrice] = useState(0);
    const createWarpPrice = () => {
        // (identifier, data for event)
        EventEmitter.emit('NewWarpPrice', warpPrice)
    }
    useEffect(() => {
        createWarpPrice();
    })
    return (
        <div>
            {props.warpDrive.map(warp => {
                return (
                    <button className={selectedWarp === warp.title ? 'warp-clicked' : 'warp-not-clicked'} key={warp.title}
                        onClick={() => {
                            setWarp(warp.title)
                            setWarpPrice(warp.price)
                        }}>
                        {warp.title} <br /> +{warp.price}€</button>
                )
            })}
        </div>
    )

}