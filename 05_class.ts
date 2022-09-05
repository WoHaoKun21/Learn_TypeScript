class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  run() {
    return `${this.name} is running ago`;
  }
}

const snake = new Animal("lily");
console.log(snake.run());

// 继承
class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

const littleDog = new Dog("卡卡");
console.log(littleDog.run());
console.log(littleDog.bark());
