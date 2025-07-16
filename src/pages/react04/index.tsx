import React from 'react'
import './index.css'

export default function index() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 0)
    }
    return (
        <div>
            <div>react04</div>
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>
            <div className="box4"></div>
            <div className="box5"></div>
        </div>
    )
}
