import * as React from 'react';
import logo from '../../logo.svg';

const navToggle = () => {
    var x = document.getElementById('phone-nav');
    if (x.className === '') {
        x.className += 'active';
    } else {
        x.className = '';
    }
};

export default class NavBar extends React.Component {
    buildList = () => {
      const { items = [], goToView, location } = this.props;

      return items.map(i => {
        const current = location.pathname === `/${i.route}`;
        return (
            <div
                key={`${i.text}-${i.route}`}
                className={`nav-item ${current ? 'current' : ''}`}
                onClick={() => { goToView(i.route); }}
            >
                {i.text}
            </div>
        )
      })
    }

    render() {
      return (
        <div className='root'>
            <header>
                <nav className='flex-nav'>
                    <div id='icon' className='column-6 column-8'>
                        <img src={logo} className='app-logo' alt='logo' />
                    </div>
                    <div className='column-6 column-4'>
                        <span className='toggle' onClick={() => { navToggle(); }}>
                            <i className='fa fa-bars'></i>
                        </span>
                        <div id='phone-nav'>
                            {this.buildList()}
                        </div>
                    </div>
                </nav>
            </header>
            <div className='content'>
                {this.props.children}
            </div>
        </div>
      );
    }
}
