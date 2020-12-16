/**
 * 单例模式
 * 定义：一个页面里边一个js类只初始化一次
 */

class Parent {
  constructor() {
    this.name = '小明';
    this.instance = null;
  }

  getName() {
    console.log(this.name)
  }
}

// 单例模式
// 工厂函数：创建单例模式
Parent.singel = function () {
  debugger;
  if (!this.instance) {
    this.instance = new Parent()
  }
  return this.instance
}
