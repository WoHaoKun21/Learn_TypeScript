class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  run() {
    return `${this.name} is running ago`;
  }
}

// const snake = new Animal("lily");
// console.log(snake.run());

// // 继承
// class Dog extends Animal {
//   bark() {
//     return `${this.name} is barking`;
//   }
// }

// const littleDog = new Dog("卡卡");
// console.log(littleDog.run());
// console.log(littleDog.bark());

// 方法重写
class Cat extends Animal {
  constructor(name: string) {
    super(name);
    console.log(this.name);
  }
  run() {
    return `Meow，${super.run()}`; // 在子类中调用父类的方法：super.方法()或者其他属性
  }
}

const litleCat = new Cat("linda");
console.log(litleCat.run());
