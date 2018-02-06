import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BinInfo extends Component {
    render() {
        // console.log(this.props)
        const { number, addNew, binDetails, available } = this.props;

//========== SIM1 38 RECEIVING AND RENDERING PROPS ==========//
        return (
            <div className='shelf-container'>
                {
                    available
                        ?
                        <Link to={binDetails}>
                            <button className='main-button full-bin'>Bin {number}</button>
                        </Link>
                        :
                        <Link to={addNew}>
                            <button className='main-button add-bin'>+ Add Inventory</button>
                        </Link>
                }
            </div>
        )
    }
}