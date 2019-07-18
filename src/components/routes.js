import * as React from 'react';
import {
  Route,
  Switch,
} from 'react-router';

import App from './App';

export default class Routes extends React.Component {  
    render() {
      return (
        <Route render={() => (
                <Switch>
                    <Route
                        exact
                        path={'/'}
                        component={App}
                    />
                    {/*
                        <Route
                        exact
                        path={URLS.testimonials}
                        component={Clients}
                    />
                    <Route
                        exact
                        path={URLS.configurator}
                        component={Studies}
                    />
                    */}
                </Switch>
        )}
        />
      );
    }
  }