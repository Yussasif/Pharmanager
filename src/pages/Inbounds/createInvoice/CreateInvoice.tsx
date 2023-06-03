import React, { useEffect } from 'react'
import image2 from '../../../assets/svg/image2.svg'
import love from '../../../assets/svg/love.svg'
import facebook from '../../../assets/svg/facebook.svg'
import twitter from '../../../assets/svg/twitter.svg'
import platform from '../../../assets/svg/platform.svg'
import restuarant from '../../../assets/svg/restuarant.svg'
import mail from '../../../assets/svg/mail.svg'
import Category from '../../../components/categoricalInventory'
import LoadImage from '../../../components/Image'
import SearchBox from '../../../components/searchBox/SearchBox'

interface props {
	onMount: Function
}

const CreateInvoice: React.FC<props> = ({onMount}) => {
	useEffect(()=>{
		onMount({text: 'Dispensary Counter', subtext: 'create an invoice'})
	},[onMount])
	return (
		<div className='inbound'>
			<LoadImage callback={()=> {}} alt="" className='page-image' imagePath={image2} height="200px" width="200px" />
			<div className="inbound-top">
				<div className="restuarant-img">
					<LoadImage callback={()=> {}} alt="" imagePath={restuarant} height="100px" width="100px"/>
				</div>
				<div className="header">
					<h2><span>RX Pharmacy</span> <div><LoadImage callback={()=> {}} alt="" imagePath={love} height="15px" width="15px"/></div></h2>
					<p>Best in class medical dispensary services</p>
					<div className="socials">
						<LoadImage callback={()=> {}} alt="" imagePath={twitter} height="20px" width="20px"/>
						<LoadImage callback={()=> {}} alt="" imagePath={platform} height="20px" width="20px" />
						<LoadImage callback={()=> {}} alt="" imagePath={facebook} height="20px" width="20px"/>
						<LoadImage callback={()=> {}} alt="" imagePath={mail} height="20px" width="20px" />
					</div>
				</div>
				<div className="searchbox">
					<SearchBox/>

				</div>
			</div>
			<div className="inventories">

				<Category name="All Inventory" count={1}/>
				<Category name="Oral Drugs and Supplement" count={1}/>
				<Category name="Intravenous injections and infusions " count={1}/>
				<Category name="First aid and treatments" count={1}/>
				<Category name="Baby and toddler supplies" count={1}/>
				<Category name="Beauty products" count={1}/>
				<Category name="Women health and sanitary products" count={1}/>
				<Category name="Vaccines and cures" count={1}/>
				
			</div>
		</div>
	)
}

export default CreateInvoice