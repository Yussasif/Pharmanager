import Settings from "./Settings";
import withRoutes from '../../hoc/withSubRoutes/withRoutes'


export default withRoutes( {
   subRoutes: [
    {
      path: "/", 
      Route: Settings,
    }
      ]}
  )