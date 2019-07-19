import * as React from 'react';

export default class Slider extends React.Component {
    state = {
        slidePosition: 0,
    }

    buildSlider = () => {
        const { slides } = this.props;
        const { slidePosition } = this.state;
        if (slides.length >= 1) {
            return (
                <div className='slider'>
                    <div className='container'>
                        <div key={slides[slidePosition].name} className='slide'>
                            <div className='name'>
                                <span className='name-span'>{slides[slidePosition].name}</span>
                                <span className='position-span'>{slides[slidePosition].position}</span>
                            </div>
                            <div className='comment'>
                                <p>{`"${slides[slidePosition].comment}"`}</p>
                            </div>
                        </div>
                    </div>
                    <div className='controls'>
                        <div className='indicator'>
                            <span>{slidePosition + 1}/{slides.length}</span>
                        </div>
                        <div className='arrows'>
                            <div onClick={this.goToPrevSlide}>
                                <i className='fa fa-arrow-left'></i>
                            </div>
                            <div onClick={this.goToNextSlide}>
                                <i className='fa fa-arrow-right'></i>
                            </div>
                        </div>
                    </div>
                </div>
            );   
        }
    };

    goToNextSlide = () => {
        const { slides } = this.props;
        this.setState(prevState => {
            if (prevState.slidePosition + 1 < slides.length) {
                return {
                    slidePosition: prevState.slidePosition + 1
                };
            }
        });
    }

    goToPrevSlide = () => {
        const { slides } = this.props;
        this.setState(prevState => {
            if (prevState.slidePosition - 1 >= 0) {
                return {
                    slidePosition: prevState.slidePosition - 1
                };
            }
        });
    }

    render() {
        return (
            <div>
                {this.buildSlider()}
            </div>
        );
    }
}
