import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import NavBarComponent from '../../components/utils/navBar';

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    goToView: (route) => ownProps.history.push(`/${route}`),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBarComponent));
