import React from 'react'
import CounterPrice from '../../../components/CounterPrice'
import Dispensary from '../../../components/Dispensary'

const Checkout = () => {
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
