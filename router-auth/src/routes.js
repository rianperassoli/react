import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { isAuthenticated } from './auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route 
        {...rest}
        render={props => isAuthenticated() ? (<Component {...props} />) : <Redirect to={{pathname:"/login", state:{from: props.location} }} />}
    />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <PrivateRoute exact path="/" component={() => <h1>Hello world</h1>} />
            <Route path="/login" component={() => <h1>Login</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;