import React from 'react'
import "./style.css"


const MAX = 100;
export default function Progress({
    value,
    max,
    onComplete = () => { },
    onStart = () => { }
}) {


    
    return (
        <div className='progress-bar'>
            <div style={{width: `${value}%`}} className='progress-value'></div>
        </div>
    )
}
