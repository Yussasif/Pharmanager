import React from 'react'
import { Link } from 'react-router-dom'
import CounterPrice from '../../../components/CounterPrice'
import Dispensary from '../../../components/Dispensary'

const Checkout: React.FC = () => {

    return (
        <div className="checkout-page">
                <Dispensary/>
                <CounterPrice price='#40.00'/>
            <div/>
            <div className="checkout-items">
                <div>
                    <span>Item total</span>
                    <span>4000.00</span>
                </div>
                <Link to="/inbounds/print-invoice">
                <button>Checkout</button>
                
                </Link>
            </div>
        </div>
    )
}

export default Checkout
