import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { routes } from '../../interfaces/hoctype';


const withRoutes  = <p extends object>(Component: React.ComponentType<p>, routes: routes) => {
    
    function RouteComponent(props: p){
        return (
            <>
            {routes.TopNavComponent}
            <Routes>
                <Route path='/' element ={<Component {...props}/>}/>
                {routes.subRoutes.map((subRoute, index)=> 
                    <React.Fragment key={index}>
                        <Route path={subRoute.path} element={subRoute.Route}/>
                    </React.Fragment>
                )}
        </Routes>
            </>
        )
    }

    return RouteComponent
}

export default withRoutes
