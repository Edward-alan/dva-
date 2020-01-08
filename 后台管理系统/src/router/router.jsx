import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouterView from './routerView'
import routes from './routerSting'


function Router() {
    return <BrowserRouter>
        <RouterView routes={routes} />
    </BrowserRouter>
}
export default Router

