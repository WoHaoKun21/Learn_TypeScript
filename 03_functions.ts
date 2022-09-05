// 函数声明写法
//      一、函数参数类型及返回值类型
function add(x: number, y: number): number {
  return x + y;
}

let result = add(3, 5); // 发送两个参数

//      二、函数可选参数：使用“ ? ”标识
function add2(x: number, y: number, z?: number): number {
  if (typeof z === "number") {
    return x + y + z;
  }
  return x + y;
}
function demo(x: number, y: number, z: number = 10): number {
  if (typeof z === "number") {
    return x + y + z;
  }
  return x + y;
}
let result2 = add2(3, 5);
let data = demo(2, 3);

// 三、函数表达式
const add3 = function (x: number, y: number, z: number = 10): number {
  if (typeof z === "number") {
    return x + y + z;
  }
  return x + y;
};

const test: (x: number, y: number, z?: number) => number = add3;
