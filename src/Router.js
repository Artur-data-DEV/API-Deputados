import React from 'react'
import { Route, Switch } from 'react-router'
import Deputados from './pages/Deputados'
import PaginaInicial from './pages/PaginaInicial'

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={PaginaInicial} />
                <Route exact path="/deputados" component={Deputados} />
            </Switch> 
        </>
    )
}

export default Router