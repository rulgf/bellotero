import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { DATA_CONFIGURATOR } from '../../constants/reducers';
import ConfiguratorComponent from '../../components/configurator/configurator';
import {
    getConfigurator,
    getEstimatedFoodCost,
    getEstimatedAnnualSavings,
} from '../../actions/configurator';

const mapStateToProps = state => ({
    calculator: state[DATA_CONFIGURATOR].calculator,
    foodCost: state[DATA_CONFIGURATOR].estimated.estimatedFoodCost,
    annualSavings: state[DATA_CONFIGURATOR].estimated.estimatedAnualSavings,
});

const mapDispatchToProps = dispatch => ({
    getConfigurator: () => dispatch(getConfigurator()),
    getEstimatedFoodCost: (monthSpending) => dispatch(getEstimatedFoodCost(monthSpending)),
    getEstimatedAnnualSavings: (employees) => {dispatch(getEstimatedAnnualSavings(employees))},
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConfiguratorComponent));
