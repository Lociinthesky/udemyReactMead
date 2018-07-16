var output = 'hi';
const showOutput = (e) => {
    e.preventDefault();
    for ( var el of e.target.elements) {
        if ( el.name === 'firstForm' ) {
            output = el.value;
        }
        console.log(el.name === 'firstForm' && 'output reassigned to ' + el.value || 'name= ' + el.name);
    }
    rend();
}


const rend = () => {
    const template = (
        <div>
        <p>Output: {output}</p>

          <form onSubmit={showOutput}>
            <input type="text" name="firstForm" />
            <input type="submit" name="submitForm" /><br /><br /><br />
            <input placeholder="does not work" name="dummyForm1" />
            <input placeholder="does not work" name="dummyForm2" />
            <input placeholder="does not work" name="dummyForm3" />
          </form>
        </div>
    )
    ReactDOM.render(template, document.getElementById('app'));
}
rend();