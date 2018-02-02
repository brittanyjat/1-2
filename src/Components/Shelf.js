import React, { Component } from 'react';

export default class Shelf extends Component {
    render() {
        const { id, history } = this.props;
        return (
            <div>
                <button className='main-button shelf' onClick={() => history.push(`/Shelf/${id}`)}>Shelf {id}</button>
            </div>
        )
    }
}