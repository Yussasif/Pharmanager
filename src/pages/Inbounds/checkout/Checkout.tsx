import React, { useEffect } from 'react'
import CounterPrice from '../../../components/CounterPrice'
import Dispensary from '../../../components/Dispensary'

interface props {
	onMount: Function
}

const Checkout: React.FC<props> = ({onMount}) => {

    useEffect(()=> {
        onMount({text: 'Dispensary Counter', subtext:'checkout'})
    }, [])

    return (
        <div className="checkout-page">
            <div className='checkout'>
                <Dispensary/>
                <CounterPrice price='#40.00'/>

            </div>
            <div className="checkout-items">
                <div>
                    <span>Item total</span>
                    <span>4000.00</span>
                </div>
                <button>Checkout</button>
            </div>
        </div>
    )
}

export default Checkout
