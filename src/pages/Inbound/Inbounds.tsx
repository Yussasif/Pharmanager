import React from 'react'
import image2 from './image2.svg'
import arrow from './arrow.svg'
import love from './love.svg'
import facebook from './facebook.svg'
import twitter from './twitter.svg'
import platform from './platform.svg'
import restuarant from './restuarant.svg'
import mail from './mail.svg'
import Category from '../../components/categoricalInventory'
import Checkout from './checkout'
import withRoutes from '../../hoc/withSubRoutes/withRoutes'
import Invoice from './invoice'
import TopNav from '../../components/topnav/TopNav'


const Inbounds: React.FC = () => {
	return (
		<div className='inbound'>
			<img className='page-image' src={image2} height="200px" width="200px" />
			<div className="inbound-top">
				<div className="restuarant-img">
					<img src={restuarant} alt="" height="100px" width="100px"/>
				</div>
				<div className="header">
					<div><h2>RX Pharmacy </h2><img src={love} height="15px" width="15px"/></div>
					<p>Best in class medical dispensary services</p>
					<div className="socials">
					<img src={twitter} height="20px" width="20px"/>
					<img src={platform} height="20px" width="20px" />
					<img src={facebook} height="20px" width="20px"/>
					<img src={mail} height="20px" width="20px" />
					</div>
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

export default withRoutes(Inbounds, {
  TopNavComponent: <TopNav component={
	<div className='component-header'>
		<h1 className='header-name'>Dispensary Counter</h1>
		<div className="invoice">
			<img className='icon' src={arrow} height="30px" width="100%"/>
			<p>Create an invoice</p>
		</div>
	</div>
}/>, subRoutes: [
  {
    path: "/checkout", 
    Route: <Checkout/>
  },
  {
    path: "/invoice",
    Route: <Invoice/>
  }
    ]}
)