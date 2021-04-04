import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {LinksComponent} from './components/Links';

export const Routes = (isAuthenticated) => {
    // if(isAuthenticated) {
    //     return (
    //         <Switch>
    //             <Route path="/links" exact>
    //                 <LinksComponent></LinksComponent>
    //             </Route>

    //         </Switch>
    //     )
    // } 

    // return (
    //     <Switch>
    //                         <Route path="/links" exact>
    //                 <p>test2</p>
    //             </Route>

    //     </Switch>
    // )
    return (
        <p>test3</p>
    )

}