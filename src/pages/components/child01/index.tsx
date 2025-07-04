import React from 'react'

//多个参数的 函数
interface IProps {
    name: string
    age: number
    children: React.ReactNode
    onChangeName: (name: string) => void
}
export default function index(props: IProps) {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.age}</div>
            <button onClick={() => props.onChangeName('李四')}>修改名字</button>
        </div>
    )
}
