import React from 'react'
import Inventory from '../Inventorys'
import image from '../../assets/svg/image.svg'
import Image from '../Image'
import rightArrow from '../../assets/svg/right-arrow.svg'
import leftArrow from '../../assets/svg/left-arrow.svg'


console.log(rightArrow)

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
					<Image imagePath={leftArrow} alt="left arrow" callback={()=> {}} />
					<Image imagePath={rightArrow} alt="rignt arrow" callback={()=> {}}/>
				</div>
			</div>
			<div className='array'>
				{array}
			</div>
		</div>
	)
}

export default Category
