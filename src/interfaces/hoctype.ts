import React from "react"

export type route = {
    Route : JSX.Element
    path: string
}

export interface routes {
    subRoutes: route[]
    TopNavComponent: JSX.Element
}