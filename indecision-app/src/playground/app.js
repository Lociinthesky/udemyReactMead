class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }  
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options}));
            }
        } catch (e) {
            //Do nothing at all
        }     
    }
    componentDidUpdate(prevProps, prevState) {
        if ( prevState.options.length !== this.state.options.length ) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption(optionToRemove) {
        this.setState(() => ({ 
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
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
        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer'; 
    
        return (
            <div>
            <Header title={title} subtitle={subtitle} />
            <Action 
                hasOptions={this.state.options.length > 0} 
                handlePick={this.handlePick} 
            />
            <Options 
                handleDeleteOption={this.handleDeleteOption} 
                handleDeleteOptions={this.handleDeleteOptions} 
                options={this.state.options}
            />
            <AddOption 
                handleAddOption={this.handleAddOption} 
            />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
    </div>
    ) 
}

const Action = (props) => {
    return (
        <div>
            <button 
                disabled={!props.hasOptions} 
                onClick={props.handlePick}
            >
                What should I do ?
            </button>
        </div>
    )
}

const Options = (props) => {
    return ( 
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add an option to get started</p>}
        { 
            props.options.map(x => ( 
              <Option 
                key={x} 
                optionText={x} 
                handleDeleteOptions={props.handleDeleteOptions}
              /> 
            ))
        }
        </div>
    )
}

const Option = (props) => {
    return (
        <div>        
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}
            >
                remove
            </button>
        </div>
    )
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

        const error = this.props.handleAddOption(val);
        this.setState(() => ({ error }));
        if (!error) {
            e.target.elements.optionField.value = '';
        }
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

