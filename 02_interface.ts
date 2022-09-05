interface Person {
  name: string;
  age: number;
}

// 一、创建的对象不允许少写或者多写一些属性；
let viking: Person = {
  name: "石鹏飞",
  age: 24,
};

// 二、如果某些属性可不选，则使用可选属性：它允许某些属性可以不存在“ ? ”
interface Person2 {
  name: string;
  age?: number;
}

let viking2: Person2 = {
  name: "石鹏飞",
};

// 三、使用readonly定义只读属性
interface Person3 {
  readonly id: number;
  name: string;
  age?: number;
}

let viking3: Person3 = {
  id: 1,
  name: "石鹏飞",
};
// viking3.id = 12; // 报错，因为id是一个只读属性
// const和readonly的区别：readonly用在属性上，const使用在变量上
