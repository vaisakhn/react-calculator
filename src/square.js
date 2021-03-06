import React from 'react';
import './index.js';


class Square extends React.Component {
    render() {
        if (this.props.value === '+' || this.props.value === '-' || this.props.value === '*' || this.props.value === '/') {
            return (
                <button className="square orange" onClick={() => {this.props.cbp(this.props.value)}}>{this.props.value}</button>
            );
        }
        else if (this.props.value === '=' || this.props.value === 'AC' || this.props.value === 'C'|| this.props.value === 'Prev') {
            return (
                <button className="square red" onClick={()=>{this.props.cbp(this.props.value)}}>{this.props.value}</button>
            );
        }

        else {
            return (
                <button className="square" onClick={()=>{this.props.cbp(this.props.value)}}>{this.props.value}</button>
            );
        }
    }
    
}

export default Square;