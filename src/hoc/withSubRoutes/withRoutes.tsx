import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom';
import { routes } from '../../interfaces/hoctype';
import Header from '../../components/Header/Header';

interface header {
    text?: string
    subtext?: string
}
const withRoutes  = <p extends object>(routes: routes) => {
    
    function RouteComponent(props: p){
        const [headerText, setHeaderText] = useState<header>({})

        const handleMount = (header: header)=> {
            setHeaderText({...header})
        }
        return (
            <>
            <Header text={headerText.text}
            subtext={headerText.subtext}
            />
            <Routes>
                {routes.subRoutes.map((subRoute, index)=> 
                    <React.Fragment key={index}>
                        <Route path={subRoute.path} element={<subRoute.Route onMount={handleMount}/>}/>
                    </React.Fragment>
                )}
        </Routes>
            </>
        )
    }

    return RouteComponent
}

export default withRoutes
