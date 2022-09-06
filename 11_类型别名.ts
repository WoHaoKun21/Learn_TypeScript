// 类型别名：给类型起个别名

type PlusType = (x: number, y: number) => number; // 给类型起个别名
function sum(x: number, y: number): number {
  return x + y;
}
const sum2: PlusType = sum; // 在函数中使用

// 联合类型别名
type NameResolver = () => string;
type NameOrResolver = string | NameResolver;
function getName(n: NameOrResolver): string {
  if (typeof n === "string") return n;
  return n();
}

// 二、类型断言：type assertion
function getLength(input: string | number): number {
  //   // 1、
  //   const str = input as String;
  //   if (str.length) {
  //     return str.length;
  //   } else {
  //     const num = input as Number;
  //     return input.toString().length;
  //   }

  // 2、
  if ((<string>input).length) {
    return (<string>input).length; // 类型断言，将input断言成string类型
  } else {
    return input.toString().length;
  }
}

