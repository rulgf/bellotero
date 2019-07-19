import * as React from 'react';
import Slider from './slider';

export default class Testimonials extends React.Component {
    render() {
        const { slider: { title, reviews = [] } } = this.props;
        return (
            <div className='testimonials'>
                <div className='title'><span>{title}</span></div>
                <Slider slides={reviews}/>
            </div>
        );
    }
}
