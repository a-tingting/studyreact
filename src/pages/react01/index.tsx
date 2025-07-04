import React from 'react'
import Child01 from '../components/child01'
import Child02 from '../components/child02'

export default function index() {
    const changeName = (name: string) => {
        console.log(name)
    }
    return (
        <div>
            <h1>react01</h1>
            <Child01 name="张三" age={18} onChangeName={changeName}>
                <div>123</div>
            </Child01>
            <Child02 />
        </div>
    )
}
