//                                      泛型更深入的用法
// 一、泛型的约束
// 1、传入的参数为T类型的数组，如果不是“T[]”的写法，有些类型美术length属性
function echoWitchArr<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}
const arr = echoWitchArr([1, 2, 3]);

// 2、传入的参数不仅仅只是数组，还有其他类型
interface IWithLength {
  length: number;
}
//                      泛型继承接口
function echoWitchLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}
const str = echoWitchLength("str");
const obj = echoWitchLength({ length: 10, width: 10 });
const arr2 = echoWitchLength([1, 2, 3]);
// echoWitchLength(12); // 报错，因为number类型没有length属性

// 二、泛型在类中的使用
class Queue<T> {
  private data = []; // 私有属性
  push(item: T) {
    return this.data.push(item); // 能正常使用
  }
  pop(): T {
    return this.data.shift(); // 能正常使用
  }
}
const queue = new Queue<number>();
queue.push(10);
console.log("Queue对象：", queue.pop().toFixed());

const queue2 = new Queue<string>();
queue2.push("str");
console.log(queue2.pop().length);

// 三、泛型在interface中的使用
interface KeyPair<T, U> {
  key: T;
  value: U;
}
let kp1: KeyPair<number, string> = { key: 1, value: "str" };
let kp2: KeyPair<string, number> = { key: "test", value: 123 };

let arrs: number[] = [1, 2, 3];
let arrTwo: Array<number> = [1, 2, 3, 6];

// 提：使用interface来描述函数
interface IPlus<T> {
  (a: T, b: T): T;
}

function plus(a: number, b: number): number {
  return a + b;
}
const a: IPlus<number> = plus;

function connect(a: string, b: string): string {
  return a + b;
}
const b: IPlus<string> = connect;
