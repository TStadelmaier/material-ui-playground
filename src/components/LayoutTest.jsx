import React from 'react';
import GridTest from './layout/GridTest';
import { Switch, Route, withRouter } from 'react-router-dom';
import Menu from './Menu/Menu';
import CustomizedBreadcrumbs from './BreadCrumb';
import Jobs from './Jobs';


function LayoutTest(props) {
    return (
        <GridTest {...props} mainArea = {
             <Switch>
                <Route path={props.match.url} exact component={Menu} />
                {/* <Route path="/" exact component={Menu} /> */}
                <Route path={`${props.match.path}test`} component={CustomizedBreadcrumbs} />
                {/* <Route path="/test" exact component={CustomizedBreadcrumbs} /> */}
                {/* <Route path="/jobs" exact component={Jobs} /> */}
                <Route path={`${props.match.url}jobs`} component={Jobs} />
                <Route path={`${props.match.url}jobs/bla`} component={Jobs} />
                {/* <Route path={`${props.match.url}jobs/:id`} component={Job} /> */}
            </Switch>
        }
        
        
        
        />
        )
            {/* <Switch> */}
                {/* <Route path={props.match.url} exact component={Menu} /> */}
                {/* <Route path="/" exact component={Menu} /> */}
                {/* <Route path={`${props.match.path}test`} component={CustomizedBreadcrumbs} /> */}
                {/* <Route path="/test" exact component={CustomizedBreadcrumbs} /> */}
                {/* <Route path="/jobs" exact component={Jobs} /> */}
                {/* <Route path={`${props.match.url}jobs`} component={Jobs} /> */}
            {/* </Switch> */}
        // </GridTest>
    // )
}

export default LayoutTest;