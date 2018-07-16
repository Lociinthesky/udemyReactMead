
var toggleValue = false;
const toggle = () => {
    if ( toggleValue ) {
        var response = prompt(`        If you leave now, your progress may not be saved.
        Restart anyway?`);
        if ( true ) {
            var response2 = prompt(`Did you say "yes"? Please type yes or no to confirm`);
            while ( response2 !== 'ja' && response2 !== 'Ja' && response2 !== 'JA' && response2 !== 'si' && response2 !== 'SI' && response2 !== 'Si' && response2 !== 'oui' && response2 !== 'OUI' && response2 !== 'Oui') {
                response2 = prompt(`"${response2 || [blank]}" is not a valid response.  Please try another language`);
            }
        }
    }
    toggleValue = !toggleValue
    renderToggleVisibilityApp();
}
const outcomes = ['You win.  Congratulations.', `You lose. Fuck off, loser.`, 'You tie -- a photo finish!']
const message = (arr) => {
    return arr[~~(Math.random() * arr.length)]
} 


const renderToggleVisibilityApp = () => { 
    const template = (
        <div>
          <button onClick={toggle}>{toggleValue ? 'Start a new game?' : 'play'}</button>
          {toggleValue && <p>{message(outcomes)}</p>}
        </div>
    )
    ReactDOM.render(template, document.getElementById('app'))
}

renderToggleVisibilityApp()
