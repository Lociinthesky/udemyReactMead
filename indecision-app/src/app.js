class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }
    handleDeleteOptions() {
        this.setState(()=> {
            return {
                options: []
            }
        })
    }
    handlePick() {
        const idx = Math.floor(this.state.options.length * Math.random())
        alert(this.state.options[idx]);
    }
    handleAddOption(option) {
        if ( !option ) { 
            return 'Error: Insert a valid option.'
        } else if (this.state.options.includes(option)){
            return 'Error: This option already exists.'
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })
    }
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer'; 
    
        return (
            <div>
            <Header title={title} subtitle={subtitle} />
            <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
            <Options handleDeleteOptions={this.handleDeleteOptions} options={this.state.options}/>
            <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
              <h1>{this.props.title}</h1>
              <p>{this.props.subtitle}</p>
        </div>
        ) 
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
              <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should I do ?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return ( 
            <div>
            <button onClick={this.props.handleDeleteOptions}>Remove All</button>
            { 
                this.props.options.map(x => <Option key={x} optionText={x} />)
            }
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>        
               {this.props.optionText}
            </div>
        ) 
    }
}
class AddOption extends React.Component { 
    constructor(props) {
        super(props)

        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const val = e.target.elements.optionField.value.trim();
        e.target.elements.optionField.value = '';

        const error = this.props.handleAddOption(val);
        this.setState(() => {
            return { error }
        })
    }
    render() {
        return (
            <div>
              {this.state.error && <p>{this.state.error}</p>}
              <form onSubmit={this.handleAddOption}>
              <input type="text" name="optionField" />   
              <button>Add Option</button>
              </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));  

