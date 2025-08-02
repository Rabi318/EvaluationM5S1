abstract class Animal {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }

  abstract makeSound(): void;
}

//Dog
class Dog extends Animal {
  makeSound(): void {
    console.log(`${this.name} says Woof!`);
  }
}

//Cat
class Cat extends Animal {
  makeSound(): void {
    console.log(`${this.name} says Meow!`);
  }
}

//Main logic
const animals: Animal[] = [new Dog("Buddy"), new Cat("Whiskers")];

for (const animal of animals) {
  animal.makeSound();
}
