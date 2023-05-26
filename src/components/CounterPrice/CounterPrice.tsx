import React, { useState } from 'react'
import minus from './minus.svg'
import plus from './plus.svg'

interface props {
    price : string
}


const CounterPrice: React.FC<props> = ({price}) => {
    const [count, setCount] = useState(1)
    const handleCounter = (type: string)=> {
        switch (type){
            case "Increment":
                setCount((count)=> count + 1)
                return
            case "Decrement":
                if(count !== 1)
                    setCount((count)=> count - 1)
                return
        }
    }
    return (
        <div className='counter-box'>
            <div className="counter">
                <h3>Quantity</h3>
                <div className="lower-box">
                    <img src={minus} onClick={()=>handleCounter("Decrement")} alt="" width="20px"/>
                    <span>{count}</span>
                    <img src={plus} onClick={()=>handleCounter("Increment")} alt="" width="20px"/>
                </div>
            </div>
            <div className="price">
                <h3>Total fee</h3>
                <div className="lower-box">
                    <span>Due Today</span>
                    <div>{price}</div>
                </div>
            </div>
        </div>
    )
}

export default CounterPrice
