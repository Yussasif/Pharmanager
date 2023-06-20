import Inbounds from "./Inbounds";
import withRoutes from '../../hoc/withSubRoutes/withRoutes'
import Checkout from "./checkout";
import PrintInvoice from "./printInvoice";
import CreateInvoice from "./createInvoice";
import Confirmed from "./Confirmed";
import Application from "./Info";
import InvoiceCR from "./invoice-cr";

export default withRoutes( {
     subRoutes: [
      {
        path: '/',
        Route: Inbounds,
        text: 'Dispensary Counter',
      },
      {
        path: "create-invoice",
        Route: CreateInvoice,
        text: 'Dispensary Counter',
        subtext: 'create an invoice',
        prevRoute: '/inbounds'
      },
      {
        path: "checkout", 
        Route: Checkout,
        text: 'Dispensary Counter',
        subtext: 'checkout',
        prevRoute: 'create-invoice'
      },
      {
        path: "print-invoice",
        Route: PrintInvoice,
        text: 'Dispensary Counter',
        subtext: 'checkout',
        prevRoute: 'checkout'
      },
      {
        path: 'order-confirmed',
        Route: Confirmed,
        text: 'Dispensary Counter',
      },
      {
        path: "invoice-order",
        Route: PrintInvoice,
        text: 'Dispensary Counter',
        subtext: 'view online order'
      },
      {
        path: "view-order",
        Route: Checkout,
        text: 'Dispensary Counter',
        subtext: 'view online order'
      },
      {
        path: "view-online-inbound",
        Route: Application,
        text: 'Dispensary Counter',
        subtext: 'view online order'
      },
      {
        path: 'invoice-report',
        Route: InvoiceCR,
        text: 'Dispensary Counter',
        subtext: 'Inbounds - custom report'
      }
    ]
  }
  )