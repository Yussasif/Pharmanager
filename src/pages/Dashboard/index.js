import Dashboard from "./Dashboard";
import withRoutes from '../../hoc/withSubRoutes/withRoutes'
import Header from '../../components/Header/Header'


export default withRoutes(Dashboard, {
    TopNavComponent: <Header text="Dashboard"/>
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