import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from '../logo.png';
import headerFunction from './headerFunction';
import binFunction from './binFunction';

export default class AddNew extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            price: 0,
            image: ''
        }

        this.addStuff = this.addStuff.bind(this);
        this.addInventory = this.addInventory.bind(this);
    }

    addStuff(prop, value) {
        this.setState({
            [prop]: value
        });
    }

    addInventory() {
        const { history } = this.props;
        const { id } = this.props.match.params;
        const { name, image, price } = this.state;

        axios.post(`/api/bin/${id}`, { name, image, price }).then(res => {
            history.goBack();
        })
    }

    render() {
        // console.log(this.props)
        // console.log(this.state);
        const { id } = this.props.match.params;
        const { history } = this.props;
        const { name, price, image } = this.state;
        return (
            <div>
                <header className='bin-header'>
                    <div className='bin-logo-container bin-menu'>
                        <Link to='/'><img src={Logo} alt='shelfie-logo' className='logo bin-logo' /></Link>
                    </div>
                    <div className='shelf-label bin-menu'>
                        <h1 onClick={() => history.goBack()} className='shelf-history'>Shelf {headerFunction(id)}</h1>
                    </div>
                    <div className='bin-detail-header'>
                        <h1>Add to Bin {binFunction(id)}</h1>
                    </div>
                </header>
                <div id='add-inventory-container'>
                    <p>Name:</p>
                    <input onChange={(event) => this.addStuff('name', event.target.value)} value={name} />
                    <p>Price:</p>
                    <input onChange={(event) => this.addStuff('price', event.target.value)} value={price} />
                    <p>Image URL:</p>
                    <input onChange={(event) => this.addStuff('image', event.target.value)} value={image} />
                    <br/><button onClick={this.addInventory} className='save-button add'>+ Add to Inventory</button>
                </div>
            </div>
        )
    }
}