import React from 'react';
import './index.js';


class Square extends React.Component {
    render() {
        if (this.props.value === '+' || this.props.value === '-' || this.props.value === '*' || this.props.value === '/') {
            return (
                <button class="square orange" onClick={() => {this.props.cbp(this.props.value)}}>{this.props.value}</button>
            );
        }
        else if (this.props.value === '=' || this.props.value === 'AC' || this.props.value === 'C'|| this.props.value === 'Prev') {
            return (
                <button class="square red" onClick={()=>{this.props.cbp(this.props.value)}}>{this.props.value}</button>
            );
        }

        else {
            return (
                <button class="square" onClick={()=>{this.props.cbp(this.props.value)}}>{this.props.value}</button>
            );
        }
    }
     
}

export default Square;