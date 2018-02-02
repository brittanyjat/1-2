import React, { Component } from 'react';
import axios from 'axios';
import BinInfo from './BinInfo';

export default class Bins extends Component{
    constructor(){
        super();

        this.state = {
            bins: []
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        axios.get(`/api/shelf/${id}`).then( res => {
            this.setState({
                bins: res.data
            });
        })
    }


    render(){
        // console.log(this.props.match.params.id)
        const {id} = this.props.match.params;
        // console.log(this.state.bins)
        const binDisplay = this.state.bins.map( (bin, i) => (
            bin
            ?
              <BinInfo key={ i } number={ i + 1 } binDetails={ `/bin/${id}${ i + 1 }` } available={ true } />
            :
              <BinInfo key={ i } number={ i + 1 } addNew={ `/create/${id}${ i + 1 }` } available={ false } />
          ));

        return(
            <div>
                {binDisplay}
            </div>
        )
    }
}