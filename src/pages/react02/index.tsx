import React, { useState } from 'react'
import Child02 from '../components/child02'

export default function index() {
    const [msg, setMsg] = useState('')
    const handleEvent = (msg: string) => {
        console.log(msg)
        setMsg(msg)
    }
    return (
        <div>
            <h1>react02</h1>
            <Child02 onEvent={handleEvent} />
            <div>{msg}</div>
        </div>
    )
}
