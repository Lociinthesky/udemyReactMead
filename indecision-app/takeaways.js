<p>
get live server going by:
from project folder in terminal, type
live-server public

that runs a server and opens app.js in the browser.

then open a new terminal, nav into indecision-app (the project folder) and type
babel src/app.js --out-file=public/scripts/app.js --presets=env,react

hit enter.  then type it again, but this time with --watch at the end

babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

3.10 Exploring JSX
    install packages for VSC:
        babel es6/es7
        path intellisense







3.11 conditionals
function getLocation(loc) {
    if ( loc ) {
        return <p>Location: {loc}</p>;
    } 
}
var me = {age: 30, location: 'Austin', items: ['item1', 'item2']};
var templateTwo = (
    <div>
      <h1>{me.name ? me.name : 'Anonymous'}</h1>
      {me.age < 51 && <p>{me.age}</p>}
      {getLocation(me.location)}     
    </div>
);

        </p>


class Subclass extends Superclass {
    constructor(one, two, newArg) {
        super(one, two);
        this.newArg = newArg;
    }
    protoFunction() {
        let oldOutcome = super.protoFunction();    //LOOK AT THIS LINE
        if (condition) {
            var newOutcome = change(oldOutcome);
        }
        return newOutcome || oldOutcome;
    }
}