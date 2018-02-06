import React, { Component } from 'react';
import axios from 'axios';
import BinInfo from './BinInfo';
import { Link } from 'react-router-dom';
import Logo from '../logo.png';

export default class Bins extends Component {
    constructor() {
        super();

        this.state = {
            bins: []
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(`/api/shelf/${id}`).then(res => {
            this.setState({
                bins: res.data
            });
        })
    }


    render() {
        // console.log(this.props.match.params)
        const { id } = this.props.match.params;
        // console.log(this.state.bins)
        const binDisplay = this.state.bins.map((bin, i) => (
            bin
                ?
//========== SIM1 36E (SENDING PROPS TO BININFO) ==========//
                <BinInfo key={i} number={i + 1} binDetails={`/bin/${id}${i + 1}`} available={true} />
                :
                <BinInfo key={i} number={i + 1} addNew={`/create/${id}${i + 1}`} available={false} />
        ));

        return (
            <div>
                <header className='bin-header'>
                    <div className='bin-logo-container'>
                        <Link to='/'><img src={Logo} alt='shelfie-logo' className='logo bin-logo' /></Link>
                    </div>
                    <div className='shelf-label'>
                        <h1>Shelf {id} </h1>
                    </div>
                </header>
                {binDisplay}
            </div>
        )
    }
}