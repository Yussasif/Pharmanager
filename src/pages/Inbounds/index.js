import Inbounds from "./Inbounds";
import withRoutes from '../../hoc/withSubRoutes/withRoutes'
import Checkout from "./checkout";
import PrintInvoice from "./printInvoice";
import CreateInvoice from "./createInvoice";
import Confirmed from "./Confirmed";

export default withRoutes( {
     subRoutes: [
      {
        path: '/',
        Route: Inbounds
      },
    {
      path: "/checkout", 
      Route: Checkout
    },
    {
      path: "/print-invoice",
      Route: PrintInvoice
    },
    {
      path: "/create-invoice",
      Route: CreateInvoice
    },
    {
      path: 'order-confirmed',
      Route: Confirmed
    }
  ]}
  )