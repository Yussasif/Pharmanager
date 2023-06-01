import React from 'react'
import CounterPrice from '../../../components/CounterPrice'

const Invoice: React.FC = () => {
	return (
		<div className='block-invoice'>
			<div className="counter-item-session">
				<CounterPrice price='#40.00'/>
				<CounterPrice price='#40.00'/>

			</div>
			<div className="delivery-info">
				<h3>Delivery information</h3>
				<form action="">
					<label htmlFor="name">Name</label>
					<input type="text" id='name' placeholder='Lano Peters'/>
					<label htmlFor="email">Email</label>
					<input type="email" id='email' placeholder='lanopeters392@gmail.com'/>
					<label htmlFor="state"></label>
					<input type="text" id='state' placeholder='Anambra State'/>
					<label htmlFor="address"></label>
					<input type="text" id='address' placeholder='amuku town, Anambra State'/>
					<label htmlFor="city"></label>
					<input type="text" id='city' placeholder='Akwa'/>
					<label htmlFor="mobile-number"></label>
					<input type="number" id='mobile-number' placeholder='+2349145782934'/>
					<label htmlFor="zip"></label>
					<input type="text" id='zip' placeholder='40001'/>
					<label htmlFor="local-govt"></label>
					<input type="text" id='local-govt' placeholder='Akwa-South'/>
				</form>

				<h3>Schedule Delivery</h3>
			</div>
		</div>
	)
}

export default Invoice
