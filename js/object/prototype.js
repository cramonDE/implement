//  new 构造器

var o = new Foo();

// ----- 

var o = new Object();
o.__proto__ = Foo.prototype;
Foo.call(o);

// 通过 class 创建

var child = new Child3();
function _inherits(subClass, superClass) {
    // ...
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

// 使用 Object.create(superClass 截取原型链上的方法，之后通过setPrototypeOf 获取父类的静态函数