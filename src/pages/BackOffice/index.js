import BackOffice from "./BankOffice";
import withRoutes from '../../hoc/withSubRoutes/withRoutes'
import Header from '../../components/Header/Header'


export default withRoutes(BackOffice, {
    TopNavComponent: <Header text="BackOffice"/>
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