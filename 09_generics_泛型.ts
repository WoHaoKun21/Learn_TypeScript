// 泛型;

// 传入值是number类型，返回值也是number类型
function echo(arg: number): number {
  return arg;
}

const result = echo(123);

// 有时候我们传入的是string，boolean等类型，他的返回值也是对应的类型，怎么解决？
// 使用泛型
function echo2<T>(arg: T): T {
  return arg;
}

const result2 = echo2(true);

// 元祖类型
function swap<T, U, V>(tuple: [T, U, V]): [U, V, T] {
  return [tuple[1], tuple[2], tuple[0]];
}
const result3 = swap(["string", 123, true]);
// result3[1].方法()————使用对应类型上的方法
