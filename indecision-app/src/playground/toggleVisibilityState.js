class ToggleVisibility extends React.Component {
    constructor(props) {
        super(props);

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
              <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Start a new game?' : 'play'}</button>
              {this.state.visibility && <p>now you see me</p>}
            </div>
        )
    }
    
}

ReactDOM.render(<ToggleVisibility />, document.getElementById('app'))
