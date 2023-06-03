import Dashboard from "./Dashboard";
import withRoutes from '../../hoc/withSubRoutes/withRoutes'


export default withRoutes({
    subRoutes: [
    {
      path: "/", 
      Route: Dashboard, 
    }
      ]}
  )