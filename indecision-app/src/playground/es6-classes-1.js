class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hey, I'm ${this.name}.`
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

var me = new Person('Lancelot Tschirhart', 30);
console.log(me.getGreeting());
console.log(me.getDescription());

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }   
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if ( this.hasMajor() ) {
            description += `Their major is ${this.major}.`;
        }
        return description;
    }
}

var she = new Student('KTK', 40, 'School of Life');
console.log(she.getGreeting());
console.log(she.getDescription());
console.log(she.hasMajor());


class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    divulgedLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greet = super.getGreeting();
        if (this.divulgedLocation()) {
            greet += `  I come from ${this.homeLocation}.`
        }
        return greet;
    }
}