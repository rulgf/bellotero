import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { DATA_TESTIMONIALS } from '../../constants/reducers';
import TestimonialsComponent from '../../components/testimonials/testimonials';

const mapStateToProps = state => ({
    slider: state[DATA_TESTIMONIALS].slider,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TestimonialsComponent));
