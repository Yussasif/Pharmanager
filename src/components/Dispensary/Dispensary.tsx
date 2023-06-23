import React from 'react'
import drugimage from './image.svg'

const Dispensary: React.FC = () => {
    return (
            <div className='drug-dispensary'>
                <img src={drugimage} alt="drug" width="10px"/>
                <div className='description'>
                    <h4>Penicillin ointment</h4>
                    <span>RX Pharmacy, Oshodi</span>
                    <h4>200mg l 1 Tube l 2 drops per use</h4>

                    <p>View dispensary details</p>
                </div>
            </div>
    )
}

export default Dispensary
