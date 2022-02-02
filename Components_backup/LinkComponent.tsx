import React from "react"
import EventEmitter from "../utils/EventEmit"


export default function LinkComponent() {
    const createNewLog = () => {
        // (identifier, data for event)
        EventEmitter.emit('NewLog', {
            text: 'hi,this is text',
            create_at: new Date()
        })
    }

    return (
        <div onClick={createNewLog}>Click on me!</div>
    )
}