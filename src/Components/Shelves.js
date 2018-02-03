import React, { Component } from 'react';
import Shelf from './Shelf';
import Logo from '../logo.png';

export default class Shevles extends Component {
    render() {
        const { history } = this.props
        // console.log(this.props)
        return (
            <div>
                <header className='home-header'>
                        <img src={Logo} alt='shelfie-logo' className='logo' />
                        <h1>SHELFIE</h1>
                </header>
                <div className='shelf-container'>
                    <Shelf id='A' history={history} />
                    <Shelf id='B' history={history} />
                    <Shelf id='C' history={history} />
                    <Shelf id='D' history={history} />
                </div>
            </div>
        )
    }
}