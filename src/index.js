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
            prev: ''
        }

    }
    // exp.test(this.state.value)
   // var exp = /^[(0-9_)*]+[+,-,*,/]+[(0-9_)*]*$/
    storeParent = (data) => {
        if (data === "=") {
            try{
                
            // alert(parseInt(this.state.value.slice(0,!isNaN(data))));
            var e = eval(this.state.value);
            this.setState({
                result: "The result is " + e,
                prev: e,
                value: ''
            });
        }
        catch(err){this.setState({
            result:  "Invalid Expression" +err,
            value: ''
        });}


        }
        else if (data === "AC") {
            this.setState({
                value: '',
                result: ''
            });
        }
        else if (data === "C") {
            this.setState(prevState => ({
                value: prevState.value.slice(0, -1)
            }));
        }
        else if (data === "Prev") {
            this.setState(prevState => ({
                value: prevState.value.concat(this.state.prev)
            }));
        }
        else {
            // parseInt(this.state.value);

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
                <div className="main"><h2>CALCULATOR</h2>
                    <input value={this.state.value} placeholder="Enter expression" />
                    <input value={this.state.result}  />
                    <div className="key">
                        <div className="ac">
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



