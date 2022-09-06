// class类的修饰符：给我们的类上的方法或属性提供权限管理
//       public(公共属性)：默认在任何地方都可以访问到
//       private(私有属性)：只能在类里面使用
//       protected(亲子属性)：只允许自身和继承的类使用，其他的不可以；
//       readonly：这个属性是只读的不可修改；
//       static：静态属性或方法(类名.方法()/属性)；
class Person {
  public name: string; // 这个属性是公共属性
  private age: number; // 私有属性
  protected sdept: string;
  static cateArray: string[] = ["计算机", "主机", "大头", "音响"];
  static isDone(e: object) {
    return e instanceof Person;
  }
  constructor(name: string, age: number = 21, sdept: string = "造价工程师") {
    this.name = name;
    this.age = age;
    this.sdept = sdept;
    console.log(this.age); // 可以访问类上的私有属性age
  }
  run() {
    return `${this.name} is running ago`;
  }
}

const p1 = new Person("tom");
// console.log(p1.name);
// p1.name = "jarry";
// console.log(p1.name); // 修改属性值

class Teacher extends Person {
  bark() {
    return `${this.sdept} is barking`;
  }
}

const t1 = new Teacher("李元", 25, "计算机网络");
// console.log(t1);

console.log("直接访问静态属性：", Person.cateArray);
console.log("直接访问静态方法：", Person.isDone(t1));
