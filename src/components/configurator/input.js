import * as React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default class Input extends React.Component {
    state = {
        value: 0,
    }
    render() {
        const {
            description,
            span,
            smallInput,
            min,
            max,
            float,
            onChange,
        } = this.props;
        const { value } = this.state;
        return (
            <div>
                <div className='calculator-input'>
                    <div className='input-desc'>
                        {description}
                    </div>
                    <div className='input-elem'>
                        <div className={`funding-summary input prefixed-input ${smallInput ? 'small-input' : ''}`}>
                            {
                                span !== null
                                ? (
                                    <span className="currency-prefixed">{span}</span>
                                )
                                : null
                            }
                            <input
                                className={`currency-prefixed-input ${span ? 'span-pad' : ''}`}
                                type="number"
                                value={value}
                                min={min}
                                max={max}
                                step={float ? '0.01' : '1'}
                                onChange={({ target }) => {
                                    this.setState({ value: target.value }, ()=> {
                                        onChange(this.state.value);
                                    })}
                                }
                            />
                        </div>
                    </div>
                </div>
                <Slider
                    min={min}
                    max={max}
                    trackStyle={{ backgroundColor: '#071eb3' }}
                    handleStyle={{ borderColor: '#071eb3' }}
                    value={value}
                    onChange={(value) => { this.setState({ value }, ()=> {
                        onChange(this.state.value);
                    })}}
                />
            </div>
        );
    }
}
