import React, { Fragment } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';

export default class AppRouter extends React.Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter basename={'shopping-cart'}>
          <Switch>
            <Route path="/landing" component={LandingPage} />
            <Route path="/landing" component={LandingPage} />
            <Route path="/landing" component={LandingPage} />
            <Route path="/landing" component={LandingPage} />
            <Route path="/landing" component={LandingPage} />

            <Redirect exact from="/" to="/landing" />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}
