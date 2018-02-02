import React, { Component } from 'react';
import axios from 'axios';

export default class AddNew extends Component{
    constructor(){
        super();

        this.state = {
            name: '',
            price: 0,
            image: ''
        }

        this.addStuff = this.addStuff.bind(this);
        this.addInventory = this.addInventory.bind(this);
    }

    addStuff(prop, value){
        this.setState({
            [prop]: value
        });
    }

    addInventory(){
        const { history } = this.props;
        const { id } = this.props.match.params;
        const {name, image, price } = this.state;

        axios.post(`/api/bin/${id}`, {name, image, price}).then(res => {
            history.push(`/bins/${id}`);
        })
    }

    render(){
        // console.log(this.props)
        // console.log(this.state);
        const {name, price, image } = this.state;
        return(
            <div>
                <p>Name:</p>
                <input onChange={(event) => this.addStuff('name', event.target.value)} value={name}/>
                <p>Price:</p>
                <input onChange={(event) => this.addStuff('price', event.target.value)} value={price} />
                <p>Image URL:</p>
                <input onChange={(event) => this.addStuff('image', event.target.value)} value={image} />
                <button onClick={this.addInventory}>+ Add to Inventory</button>
            </div>
        )
    }
}