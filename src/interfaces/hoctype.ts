import React from "react"

export type route = {
    Route : React.FC
    path: string
    text?: string
    subtext?: string
}

export interface routes {
    subRoutes: route[]
    TopNavComponent: JSX.Element
}