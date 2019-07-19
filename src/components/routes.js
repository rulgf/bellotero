import * as React from 'react';
import {
  Route,
  Switch,
} from 'react-router';

import NavBar from '../containers/utils/navBar';
import App from './App';

export default class Routes extends React.Component {
    componentDidMount() {
      const { getGlobals } = this.props;
      getGlobals();
    }

    render() {
        const { globals: { items = [] } } = this.props;
        return (
            <NavBar items={items}>
                <Switch>
                    <Route
                        path={'/'}
                        component={App}
                    />
                </Switch>
            </NavBar>
        );
    }
}
