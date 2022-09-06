// 当两个或者多个类都必须拥有相同的方法，可以将这个方法提取成一个接口，提示用户书写这个方法

interface Radio {
  switchRadio(): void;
}

interface Battery {
  checkBatteryStatus();
}

// 接口继承
interface RadioWithBattery extends Radio {
  checkBatteryStatus();
}

// class类里面使用interface接口
class Car implements Radio {
  switchRadio(): void {}
}

// 类使用多个interface接口
class Cellphone implements Radio, Battery {
  switchRadio(): void {}
  checkBatteryStatus() {}
}

class Computer implements RadioWithBattery {
  switchRadio(): void {}
  checkBatteryStatus() {}
}
