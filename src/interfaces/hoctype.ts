import React from "react"
interface props {
	onMount: Function
}
export type route = {
    Route : React.FC<props>
    path: string
}

export interface routes {
    subRoutes: route[]
    TopNavComponent: JSX.Element
}