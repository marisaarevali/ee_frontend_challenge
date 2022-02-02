
import React ,{ useState, useEffect } from "react"
import EventEmitter from "../utils/EventEmit"



export default function LabelComponent () {

    useEffect(()=> {
        const onNewLog = (eventData: any) => {
            setLogs(prevValue => ([
                ...prevValue,
                eventData
            ]))
        }

        const listener = EventEmitter.addListener('NewLog', onNewLog)

        return ()=>{
            listener.remove();
        }
    })

    
    const [logs,setLogs] = useState<any[]>([])
    
    
    return (
        <div>
            {logs.map(log => { return (<div key={log.create_at}>{log.text}</div>)}   )}
    </div>

    )
    
}