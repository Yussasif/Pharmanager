import Manager from "./Manager";
import withRoutes from '../../hoc/withSubRoutes/withRoutes'


export default withRoutes({
    subRoutes: [
    {
      path: "/", 
      Route: Manager, 
    },
    ]}
  )