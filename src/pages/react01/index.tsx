import React, { useState } from 'react'
import Child01 from '../components/child01'

export default function index() {
    const [name, setName] = useState('张三')
    const [age, setAge] = useState(18)
    const changeInfo = () => {
        setName('李四')
        setAge(20)
    }
    return (
        <div>
            <h1>react01</h1>
            <Child01 name={name} age={age}>
                <div>name:{name}</div>
                <div>age:{age}</div>
            </Child01>
            <button
                onClick={() => {
                    changeInfo()
                }}
            >
                点击
            </button>
        </div>
    )
}
