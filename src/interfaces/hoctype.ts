import React from "react"


type props = {
    callback: Function
}
export type route = {
    Route : React.FC<props>
    path: string
    text?: string
    subtext?: string
    prevRoute: string
}

export interface routes {
    subRoutes: route[]
    paths: string[]
}