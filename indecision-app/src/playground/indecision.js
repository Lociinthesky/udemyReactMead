console.log('app.js is running!')


let app = {
    title: 'Indecision app',
    subtitle: 'put your life in the hands of a computer',
    options: []
}

const onFormSubmit = ( e ) => {
    e.preventDefault();
    console.log(e.target);
    //e.target -> the element that the event started on (here: <form>)
    //in target, we have access to its innerHTML elements (here: e.target.elements)
    //in elements, we have a list that is indexed by name= (here: option)
    //in an element, we have access to its value. (here: the input text)
    const option = e.target.elements.option.value;
    if ( option ) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp()  
    }
}

const removeAll = () => {
    app.options = [];
    renderApp();   
}    

const onMakeDecision = () => {
  const len = app.options.length;
  const idx = Math.floor(Math.random() * len);
  decision = len ? app.options[idx] : '42';
  renderApp();
}

const appRoot = document.getElementById('app');
var decision = '42';


const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>} 
            <p>{app.options.length > 0 ? 'Here are your options: ' : 'No options'}</p>
            <button disabled={!app.options.length} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Clear List</button>
            <ol>
            {
                app.options.map(option => <li key={option}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
              <input type="text" name="option" />
              <button>Add Option</button>
            </form>
            <p style={{backgroundColor: 'red', fontSize: 144}}>{decision}</p>
        </div>
    )
    ReactDOM.render(template, appRoot);
}

renderApp();

    