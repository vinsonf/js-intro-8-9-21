class Animal {
    name = 'rover';
    food = 'not sure';
    type = 'animal';
    div = document.createElement('h1');

    constructor(name) {
        this.name = name;
        this.createElement();
    }

    addType() {
        this.div.classList.add(this.type);
    }

    createElement() {
    
      
        document.body.appendChild(this.div);
        this.div.innerHTML = this.name + '<br>';
        const eatButton= document.createElement('button');
        const moveButton= document.createElement('button');

        eatButton.innerHTML = 'EAT';
        moveButton.innerHTML = 'MOVE';
        this.div.appendChild(eatButton);
        this.div.appendChild(moveButton);

        eatButton.addEventListener('click', () => {
           this.eat(); 
        });
        moveButton.addEventListener('click', () => {
            this.move(); 
         })
    }

    eat() {
        console.log(this.name, 'eats', this.food);
    }

    move() {
        console.log(this.name, 'moves')
    }
}

class Carnivore extends Animal {
    food = 'meat';
    constructor(name) {
        super(name);
        this.addType();
    }
}
class Herbivore extends Animal{
    food = 'plants'
}
class Omnivore extends Animal{
    food = 'both meat and plants'
}

class Dog extends Carnivore {
    type = 'dog';
    constructor(name) {
        super(name);
        this.addType();
    }
    move() {
        console.log(this.name, 'walks')
    }
}
class Horse extends Herbivore {
    type = 'horse';
    constructor(name) {
        super(name);
        this.addType();
    }
    move() {
        console.log(this.name, 'gallops')
    }
}
class Bird extends Omnivore {
    type = 'bird';
    featherColor = 'red';

    constructor(name, featherColor) {
        super(name);
        this.featherColor = featherColor;
        this.addType();
    }

    move() {
        super.move();
        console.log(this.name, 'flies')
    }
}


const animal1 = new Dog('Rover');
const animal1a = new Dog('Buddy');
const animal2 = new Horse('Spot');
const animal3 = new Bird('Tweety', 'green');


console.log(animal1, animal2, animal3)

animal1.move();
animal2.move();
animal3.move();