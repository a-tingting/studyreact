import React from 'react'
import { Link } from 'react-router-dom'

export default function index() {
    return (
        <div>
            <h1>首页</h1>
            <div>
                <Link to="/react01">react01</Link>
            </div>
            <div>
                <Link to="/react02">react02</Link>
            </div>
            <div>
                <Link to="/react03">react03</Link>
            </div>
            <div>
                <Link to="/react04">react04</Link>
            </div>
        </div>
    )
}
