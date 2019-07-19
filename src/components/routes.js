import * as React from 'react';
import {
  Route,
  Switch,
} from 'react-router';

import NavBar from '../containers/utils/navBar';
import App from './App';
import Testimonials from '../containers/testimonials/testimonials';

export default class Routes extends React.Component {
    // Get Json from async calls
    componentDidMount() {
      const { getGlobals, getTestimonials } = this.props;
      getGlobals();
      getTestimonials();
    }

    // Build the Routes from the globals map
    buildRoutes = () => {
        const { globals: { items = [] } } = this.props;

        return items.map(i => {
            let routeComponent = App;

            // Switch for the right component
            switch(i.text) {
                case 'Testimonial':
                    routeComponent = Testimonials;
                    break;
                default:
                    routeComponent = App; 
                    break;
            }

            return (
                <Route
                    key={`${i.text}-${i.route}`}
                    exact
                    path={`/${i.route}`}
                    component={routeComponent}
                />
            );
        })
    }

    render() {
        const { globals: { items = [] } } = this.props;
        return (
            <NavBar items={items}>
                <Switch>
                    <Route
                        exact
                        path={'/'}
                        component={App}
                    />
                    {this.buildRoutes()}
                </Switch>
            </NavBar>
        );
    }
}
