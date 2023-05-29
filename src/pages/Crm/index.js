import Crm from "./Crm";
import withRoutes from '../../hoc/withSubRoutes/withRoutes'
import Header from '../../components/Header/Header'


export default withRoutes(Crm, {
    TopNavComponent: <Header text="Crm"/>
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