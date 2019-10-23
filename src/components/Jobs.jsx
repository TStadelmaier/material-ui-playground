import React, { Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';
import NavLink from './NavLink';

export default function Jobs() {
    return (
        <Fragment>

        
        <h1>jobs</h1>
        <br></br>
        <NavLink to='/'>Menu</NavLink>


         {/* <Switch>
         <Route />

         </Switch> */}
        </Fragment>
    );
}