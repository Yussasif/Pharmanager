import Inbounds from "./Inbounds";
import withRoutes from '../../hoc/withSubRoutes/withRoutes'
import Header from '../../components/Header/Header'


export default withRoutes(Inbounds, {
    TopNavComponent: <Header text="Dispensary Counter"/>
    , subRoutes: [
    {
      path: "/checkout", 
      Route: <div>Checkout</div>
    },
    {
      path: "/invoice",
      Route: <div>Invoice</div>
    }
      ]}
  )