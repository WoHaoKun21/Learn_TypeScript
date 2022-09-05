// 一、布尔类型
let isDone: boolean = false; // 类型为布尔类型——如果赋值为其他类型则会报错

// 二、number类型
let age: number = 20; // number类型
let binaryNumber: number = 0b1111; // ES6提供了八进制和二进制表示法：0b/0o
let binaryNumber2: number = 0o123;

// 三、string类型
let firstName: string = "viking";
let message: string = `Hello，${firstName}，age is ${age}`;

// 四、特殊类型：undefined和null是所有类型的子类型
let u: undefined = undefined;
let n: null = null;

// 五、any类型：什么类型都可以
let notSure: any = 456;
notSure = "maybe it is a string";
notSure = true;
//   也可以是对象类型
notSure.myName;
notSure.getName();

// 六、Union Types：联合类型
let numberOrString: number | string = "123zv"; // 变量支持number和string类型
numberOrString = 213;
// numberOrString = true;// 会出现警告

// 七、数组类型
let arrOfNumber: number[] = [1, 2, 3, 4]; // number类型数组、不允许出现其他类型
arrOfNumber.push(5);
// arrOfNumber.push("abc"); // 字符串类型会报错

function test() {
  console.log(arguments); // arguments是一个类数组，并没有类数组上的方法
}

// 八、元组类型
let user: [string, number] = ["viking", 20]; // 少写或多写一项也不可以
// user = ["spf", 20, 18];// 不允许多写
