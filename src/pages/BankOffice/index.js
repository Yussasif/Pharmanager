import BankOffice from "./BankOffice";
import withRoutes from '../../hoc/withSubRoutes/withRoutes'
import Header from '../../components/Header/Header'


export default withRoutes(BankOffice, {
    TopNavComponent: <Header text="BankOffice"/>
    , subRoutes: [
    {
      path: "/anypath", 
      Route: <div>AnyPath</div>
    },
    {
      path: "/example",
      Route: <div>Example</div>
    }
      ]}
  )