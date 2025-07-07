import React from 'react'

interface IProps {
    onEvent: (msg: string) => void
}
export default function index(props: IProps) {
    return (
        <div>
            <button onClick={() => props.onEvent('点击了子组件')}>点击</button>
        </div>
    )
}
