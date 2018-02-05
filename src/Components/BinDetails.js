import React, { Component } from 'react';
import axios from 'axios';
import Logo from '../logo.png';
import { Link } from 'react-router-dom';
import headerFunction from './headerFunction';

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

    componentDidMount() {
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
        const { history } = this.props;
        const { id } = this.props.match.params;

        axios.put(`/api/bin/${id}`, { name, price }).then(res => {
            this.setState({
                edit: false
            });
            history.goBack(-1);
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
        // console.log(this.props)
        // console.log(this.state.edit)
        const { item, name, price, edit } = this.state;
        const { id } = this.props.match.params;
        const { history } = this.props;

        const editMode =
            <div>
                <p>Name:</p>
                <input onChange={(event) => this.handleChange('name', event.target.value)} value={name} />
                <p>Price:</p>
                <input onChange={(event) => this.handleChange('price', event.target.value)} value={price} />
            </div>

        const readMode =
            <div>
                <p>Name:</p>
                <h3>{name}</h3>
                <p>Price:</p>
                <h3>{price}</h3>
            </div>

        return (
            <div>
                <header className='bin-header'>
                    <div className='bin-logo-container bin-menu'>
                        <Link to='/'><img src={Logo} alt='shelfie-logo' className='logo bin-logo' /></Link>
                    </div>
                    <div className='shelf-label bin-menu'>
                        <h1 onClick={() => history.goBack()} className='shelf-history'>Shelf {id.split('').splice(0, 1).join('')}</h1>
                    </div>
                    <div className='bin-detail-header'>
                        <h1>Bin {headerFunction(id)}</h1>
                    </div>
                </header>

                <div>
                    {item ?
                        <div id='bin-container'>
                            <img className='left-container' src={item.image} alt='bin-thumbnail' />
                            <div className='right-container'>
                                <div className='container-content'>
                                    {edit ? editMode : readMode}
                                    <div className='edit-delete-buttons'>
                                        {edit ? <button className='save-button' onClick={this.saveChange}>Save</button>
                                              : <button className='detail-button' onClick={() => this.handleChange('edit', true)}>Edit</button>}
                                        <button className='detail-button' onClick={this.deleteItem}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        )
    }
}