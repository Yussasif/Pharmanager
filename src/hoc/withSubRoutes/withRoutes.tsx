import React, {useEffect, useState, useCallback} from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { routes, route } from '../../interfaces/hoctype';
import Header from '../../components/Header/Header';

interface header {
    text?: string
    subtext?: string
    cartCount?: number
    h?: string
}
const withRoutes  = <p extends object>(routes: routes) => {
    
    function RouteComponent(props: p){
        const [headerText, setHeaderText] = useState<header>({})
        const location = useLocation();
        const path = location.pathname.split('/')
        const pathname = path[path.length-1]
        const getCurrentRoute = useCallback(():route => {
            const currentRoute = routes.subRoutes.find(route => route.path ===  pathname);
            if (!currentRoute){
                return routes.subRoutes[0]
            }
            return currentRoute
        }, [pathname]);

        useEffect(()=>{

            const route = getCurrentRoute()
            setHeaderText({text: route.text, subtext: route.subtext, h: route.prevRoute})

        },[getCurrentRoute])
        return (
            <>
            <Header text={headerText.text}
                subtext={headerText.subtext}
                cartCount={headerText.cartCount}
                h={headerText.h}
            />
            <Routes>
                {routes.subRoutes.map((subRoute, index)=> 
                    <React.Fragment key={index}>
                        <Route path={subRoute.path} element={<subRoute.Route  callback={(data: number)=> setHeaderText({...headerText, cartCount: data})}/>}/>
                    </React.Fragment>
                )}
        </Routes>
            </>
        )
    }

    return RouteComponent
}

export default withRoutes
