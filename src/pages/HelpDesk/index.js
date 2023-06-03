import HelpDesk from "./HelpDesk";
import withRoutes from '../../hoc/withSubRoutes/withRoutes'


export default withRoutes({
    subRoutes: [
    {
      path: "/", 
      Route: HelpDesk, 
    }
  ]}
  )