import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Square from './square.js';



class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            result: '',
            prev:''
        }

    }
    storeParent = (data) => {
        if (data === "=") {
            var e = eval(this.state.value);
            this.setState({ result: "the result is " + e ,
        prev: e});
            this.setState({ value: '' });
        }
        else if (data === "AC") {
            this.setState({ value: '',
        result:'' });
        }
        else if (data === "C") {
            this.setState(prevState => ({
                value: prevState.value.slice(0, -1)
            }));
        }
        else if(data==="Prev"){
            this.setState(prevState => ({
                value: prevState.value.concat(this.state.prev)
            }));
        }
        else {
            this.setState(prevState => ({
                value: prevState.value.concat(data)
            }));
            this.setState({ result: '' });
        }
    }

    drawButton(i) {
        return (
            <Square value={i} cbp={this.storeParent} />
        );
    }



    render() {
        return (
            <div>
                <div class="main"><h1>CALCULATOR</h1>
                    <input value={this.state.value} placeholder="Enter expression" />
                    <input value={this.state.result} placeholder="output" />
                    <div class="key">
                        <div class="ac">
                            {this.drawButton('AC')}
                            {this.drawButton('C')}
                            {this.drawButton('Prev')}

                        </div>
                        <div>
                            {this.drawButton(7)}
                            {this.drawButton(8)}
                            {this.drawButton(9)}
                            {this.drawButton('*')}


                        </div>
                        <div>
                            {this.drawButton(4)}
                            {this.drawButton(5)}
                            {this.drawButton(6)}
                            {this.drawButton('-')}
                        </div>
                        <div>
                            {this.drawButton(1)}
                            {this.drawButton(2)}
                            {this.drawButton(3)}
                            {this.drawButton('+')}
                        </div>
                        <div>
                            {this.drawButton(0)}
                            {this.drawButton('.')}
                            {this.drawButton("00")}
                            {this.drawButton('/')}
                        </div>
                        <div class="eq">
                            {this.drawButton('=')}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
ReactDOM.render(

    <Calculator />,
    document.getElementById('root')
);



