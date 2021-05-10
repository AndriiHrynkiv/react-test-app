import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {LinksComponent} from './components/Links';
import {CreatePageComponent} from './components/CreatePage';
import {AuthPageComponent} from './components/AuthPath';

export const UseRoutes = (isAuthenticated) => {
    if(isAuthenticated) {
        return (
            <Switch>
                <Route path="/links" exact>
                    <LinksComponent></LinksComponent>
                </Route>
                <Route path="/create" exact>
                    <CreatePageComponent></CreatePageComponent>
                </Route>
            </Switch>
        )
    } 

    return (
        <Switch>
            <Route path="/">
                    <AuthPageComponent></AuthPageComponent>
                </Route>
        </Switch>
    )
}