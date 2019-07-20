import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { DATA_GLOBALS, UI_APP } from '../constants/reducers';
import RoutesComponent from '../components/routes';

import { getGlobals } from '../actions/globals';

const mapStateToProps = state => ({
    errorMessage: state[UI_APP].errorMessage,
    loading: state[UI_APP].loading,
    globals: state[DATA_GLOBALS].globals,
});

const mapDispatchToProps = dispatch => ({
    getGlobals: () => dispatch(getGlobals()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RoutesComponent));
