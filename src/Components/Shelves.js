import React, { Component } from 'react';
import Shelf from './Shelf';

export default class Shevles extends Component {
    render() {
        const { history } = this.props
        // console.log(this.props)
        return (
            <div className='shelf-container'>
                <Shelf id='A' history={history} />
                <Shelf id='B' history={history} />
                <Shelf id='C' history={history} />
                <Shelf id='D' history={history} />
            </div>
        )
    }
}