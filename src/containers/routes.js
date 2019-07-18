import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { DATA_GLOBALS } from '../constants/reducers';
import RoutesComponent from '../components/routes';

const mapStateToProps = state => ({
    errorMessage: state[DATA_GLOBALS].error,
    loading: state[DATA_GLOBALS].loading,
    menu: state[DATA_GLOBALS].menu,
});

const mapDispatchToProps = () => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RoutesComponent));
