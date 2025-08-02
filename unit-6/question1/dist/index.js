"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
}
//Dog
class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} says Woof!`);
    }
}
//Cat
class Cat extends Animal {
    makeSound() {
        console.log(`${this.name} says Meow!`);
    }
}
//Main logic
const animals = [new Dog("Buddy"), new Cat("Whiskers")];
for (const animal of animals) {
    animal.makeSound();
}
