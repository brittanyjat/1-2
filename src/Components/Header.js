import React, { Component } from 'react';
import Logo from '../logo.png';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import headerFunction from './headerFunction';

class Header extends Component {
    render() {
        var { location } = this.props;
        console.log(this.props)
        // console.log(this.state)
        const shelfHeader =
            <div>
                <div>
                    <Link to='/'><img src={Logo} alt='shelfie-logo' className='logo' /></Link>
                </div>
                <div className='bin-header-span-container'>
                    <span className='bin-header-span'>{headerFunction(location.pathname)}</span>
                </div>
            </div> ;

        return (
            <div className='header'>
                {mainHeader}
                {/* {shelfHeader} */}
            </div>
        )
    }
}

export default withRouter(Header);