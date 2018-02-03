import React, { Component } from 'react';
import axios from 'axios';
import Logo from '../logo.png';
import { Link } from 'react-router-dom';

export default class BinDetails extends Component {
    constructor() {
        super();

        this.state = {
            item: null,
            name: '',
            price: '',
            edit: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.saveChange = this.saveChange.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentWillMount() {
        const { id } = this.props.match.params;
        const { history } = this.props;
        axios.get(`/api/bin/${id}`).then(res => {
            if (!res.data) {
                history.push(`/create/${id}`)
            } else {
                this.setState({
                    item: res.data,
                    name: res.data.name,
                    price: res.data.price,
                });
            }
        });
    }

    handleChange(prop, value) {
        this.setState({
            [prop]: value
        })
    }

    saveChange() {
        const { price, name } = this.state;
        const { id } = this.props.match.params;
        // const { history } = this.props;

        axios.put(`/api/bin/${id}`, { name, price }).then(res => {
            // console.log(res.data)
            // history.goBack();
            this.setState({
                edit: false
            });
        });
    }


    deleteItem() {
        const { id } = this.props.match.params;
        const { history } = this.props;

        axios.delete(`/api/bin/${id}`).then(res => {
            history.push(`/Shelf/${id[0]}`)
        }).catch(err => { console.log(err) })
    }

    render() {
        // console.log(this.props.match)
        // console.log(this.state)
        console.log(this.props)
        const { item, name, price, edit } = this.state;
        const {id} = this.props.match.params;
        const { history } = this.props;

        const editMode =
            <div className='edit-container'>
                <p>Name: </p>
                <input onChange={(event) => this.handleChange('name', event.target.value)} value={name} />
                <p>Price:</p>
                <input onChange={(event) => this.handleChange('price', event.target.value)} value={price} />
                {/* <input onChange={(event) => this.handleChange('image', event.target.value)} value={image} /> */}
                <br /><button className='save-button' onClick={this.saveChange}>Save</button>
            </div>

        const displayBins =
            <div className='right-detail'>
                <p>Name: {name}</p>
                <p>Price: {price}</p>
                <button className='detail-button' onClick={() => this.handleChange('edit', true)}>Edit</button>
            </div>


        return (
            <div>
                <header>
                    <div className='bin-header-content'>
                        <div className='bin-logo-container'>
                            <Link to='/'><img src={Logo} alt='shelfie-logo' className='logo bin-logo' /></Link>
                        </div>
                        <div className='shelf-label'>
                            <h1 onClick={() => history.goBack()} className='shelf-history'>Shelf {id.split('').splice(0,1).join('')}</h1>
                        </div>
                        <div className='bin-detail-header'>
                            <h1>Bin {id.split('').splice(1,1).join('')}</h1>
                        </div>
                    </div>
                </header>
                <div className='detail-container'>
                    {item ?
                        <div>
                            <img className='left-detail' src={item.image} alt='bin-thumbnail' />
                            {edit ? editMode : displayBins}
                            <button className='detail-button' onClick={this.deleteItem}>Delete</button>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        )
    }
}