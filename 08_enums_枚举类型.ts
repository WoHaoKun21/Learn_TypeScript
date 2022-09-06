// 枚举类型

// 一、数字枚举————默认值从0开始递增
enum Direction {
  Up, // Up: 0
  Down, // Down: 1
  Left, // Left: 2
  Right, // Right: 3
}
console.log("Dirention：", Direction.Up);
console.log("Dirention：", Direction[0]); // 通过值得到属性Up

// // 数字枚举从10开始递增
// enum Direction2 {
//   Up = 10, // Up: 0
//   Down, // Down: 1
//   Left, // Left: 2
//   Right, // Right: 3
// }
// console.log("Dirention2：", Direction2.Up);
// console.log("Dirention2：", Direction2[10]); // 通过值得到属性Up

// 二、字符串枚举——进行简单的字符串比较
enum DirectionString {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
const value = "Up";
if (value === DirectionString.Up) {
  console.log("逻辑判断：Go Up!");
}

// 三、常量枚举——在枚举类型前面加上const
const enum ConstDirection {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
