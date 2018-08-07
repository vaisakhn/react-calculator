var App = React.createClass({
    getInitialState: function() {
        return ({
            operations: []
        });
    },
    calculateOperations: function() {
        var result = '';
        var operation = '';
        this.state.operations.map(function(operation, i) {
            result += operation;
            console.log(result);
        });
        
        result = String(eval(result));
        console.log(result);
        this.setState({ result: result });
    },
    handleClick: function(e) {
        var value = e.target.getAttribute('data-value');
        
        switch (value) {
            case 'clear':
                this.setState({ operations: [], result: '' });
                break;
            case 'equal':
                this.calculateOperations();
                break;
            default:
                if(this.state.result) {
                    this.setState({ result: '', operations:[]}, function() {
                        this.state.operations.push(value);
                        this.forceUpdate();
                    });
                } else {
                    this.state.operations.push(value);  
                }
                break;
        }
        
        // console.log(operations);
        this.forceUpdate();
    },
    render: function() {
        return (
            <div className="App">
                <Display data={this.state.operations} result={this.state.result} />
                <Buttons>
                    <Button onClick={this.handleClick} label="C" value="clear" />
                    <Button onClick={this.handleClick} label="7" value="7" />
                    <Button onClick={this.handleClick} label="4" value="4" />
                    <Button onClick={this.handleClick} label="1" value="1" />
                    <Button onClick={this.handleClick} label="0" value="0" />
                    
                    <Button onClick={this.handleClick} label="/" value="/" />
                    <Button onClick={this.handleClick} label="8" value="8" />
                    <Button onClick={this.handleClick} label="5" value="5" />
                    <Button onClick={this.handleClick} label="2" value="2" />
                    <Button onClick={this.handleClick} label="." value="." />
                    
                    <Button onClick={this.handleClick} label="X" value="*" />
                    <Button onClick={this.handleClick} label="9" value="9" />
                    <Button onClick={this.handleClick} label="6" value="6" />
                    <Button onClick={this.handleClick} label="3" value="3" />
                    <Button label="" value="null" />
                    
                    <Button onClick={this.handleClick} label="-" value="-" />
                    <Button onClick={this.handleClick} label="+" size="2" value="+" />
                    <Button onClick={this.handleClick} label="=" size="2" value="equal" />
                </Buttons>
            </div>
        );
    }
});

var Display = React.createClass({
    render: function() {
        var string = '';
        var value = this.props.data.map(function(operation, i) {
            string += operation; 
        });
        
        if(this.props.result) {
            string = this.props.result;
        }
        
        return (
            <div className="Display">
                {string}
            </div>
        );
    }
});

var Buttons = React.createClass({
    render: function() {
        return (
            <div className="Buttons">
                {this.props.children}
            </div>
        )
    }
});

var Button = React.createClass({
    render: function() {
        return (
            <div onClick={this.props.onClick} className="Button" data-size={this.props.size} data-value={this.props.value}>
            {this.props.label}  
            </div>
        )
    }
});

ReactDOM.render(<App />, document.getElementById('app'));