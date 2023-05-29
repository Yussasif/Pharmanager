import HelpDesk from "./HelpDesk";
import withRoutes from '../../hoc/withSubRoutes/withRoutes'
import Header from '../../components/Header/Header'


export default withRoutes(HelpDesk, {
    TopNavComponent: <Header text="HelpDesk"/>
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