import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import LoginLayout from '../layouts/login-layout'
import MainLayout from '../layouts/main-layout'
import LandingPage from '../pages/landing/landing-page'
import LoginPage from '../pages/login/login-page'
import RegisterPage from '../pages/register/register-page'
import HomePage from '../pages/home/home-page'

export default(
    <Router history={browserHistory}>
        <Route component={LoginLayout}>
            <Route path="/">
              <IndexRoute component={LandingPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="register" component={RegisterPage}/>
            </Route>
        </Route>
    </Router>
)
