import React from 'react'

//多个参数的 函数
interface IProps {
    name: string
    age: number
    children: React.ReactNode
}
export default function index(props: IProps) {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.age}</div>
            <div>{props.children}</div>
        </div>
    )
}
