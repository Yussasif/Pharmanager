import React from 'react'
import Inventory from '../Inventorys'
import image from './image.svg'
import rightArrow from './right-arrow.svg'
import leftArrow from './left-arrow.svg'

interface props {
    name: string
    count: number
}
const Category: React.FC<props> = ({name, count}) => {
    const myArray = [0, 0, 0, 0, 0]
    const array = myArray.map((_, index)=> 
    
        <Inventory key={index} image={image} drugName="Paracetamol" drugType='ORAL'/>
    )
	return (
		<div className='category'>
			<div className="top-layer">
				<h2>{name}</h2>
				<div className="arrow">
					<img src={leftArrow} alt="" width="20px"/>
					<img src={rightArrow} alt="" width="20px"/>
				</div>
			</div>
			<div className='array'>
				{array}
			</div>
		</div>
	)
}

export default Category
