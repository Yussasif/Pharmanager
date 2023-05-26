import React from 'react'
import location from './location.svg'
import prescribed from './prescribed.svg'
import quantity from './quantity.svg'
import weight from './weight.svg'

interface props {
    image: string
    drugName: string
    drugType: string
}

const Inventory : React.FC<props> = ({image, drugName, drugType}) => {
  return (
    <div className='card'>
        <div className='image-card'>
            <img src={image} height="100%" width="100%"/>
            <span className='drug-type'>{drugType}</span>
        </div>
        <p>{drugName}</p>
        <div className='card-details'>
            <div className="location">
                <div>

                    <img src={location} height="20px" width="20px"/>
                    <p>Ikeja</p>
                </div>
                <div>
                    <img src={weight} height="20px" width="20px"/>
                    <p>200mg</p>
                </div>
            </div>
            <div className="details">
                <div>
                    <img src={prescribed} height="20px" width="20px"/>
                    <p>As Prescribed</p>
                </div>
                <div>
                    <img src={quantity} height="20px" width="20px"/>
                    <p>12 packs</p>
                </div>
            </div>
            
        </div>

        <div className='card-base'>
            <p>1,000.00</p>
            <div>View Package</div>
        </div>
    </div>
  )
}

export default Inventory
