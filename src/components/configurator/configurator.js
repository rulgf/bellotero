import * as React from 'react';
import Input from './input';
import 'rc-slider/assets/index.css';


export default class Configurator extends React.Component {
    // Get Json from async calls
    componentDidMount() {
        const { getConfigurator } = this.props;
        getConfigurator();
    }

    componentWillUnmount() {
        const { getEstimatedFoodCost, getEstimatedAnnualSavings } = this.props;
        getEstimatedFoodCost(0);
        getEstimatedAnnualSavings(0);
    }

    render() {
        const {
            calculator: { title, description },
            getEstimatedFoodCost,
            getEstimatedAnnualSavings,
            foodCost,
            annualSavings,
        } = this.props;
        return (
            <div className='configurator'>
                <div className='left-box'>
                    <div className='title'><span>{title}</span></div>
                    <div className='description'>
                        <p>{description}</p>
                    </div>
                </div>
                <div className='right-box'>
                    <Input
                        span='$'
                        description='Monthly ingredient spending'
                        min={10}
                        max={100}
                        float
                        onChange={(value) => {
                            getEstimatedFoodCost(value);
                        }}
                    />
                    <Input
                        smallInput
                        description='Full-time employees that process invoices'
                        min={1}
                        max={10}
                        onChange={(value) => {  
                            getEstimatedAnnualSavings(value);
                        }}
                    />
                    <div className='results'>
                        <div className='estimated-food'>
                            <div className='result'>
                                <span className='currency'>$</span>
                                <span className='total'>{Math.round(foodCost * 100) / 100}</span>
                            </div>
                            <span className='result-desc'>Estimated cost food savings</span>
                        </div>
                        <div className='estimated-annual'>
                            <div className='result'>
                                <span className='currency'>$</span>
                                <span className='total'>{Math.round(annualSavings * 100) / 100}</span>
                            </div>
                            <span className='result-desc'>Your estimated annual savings</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
