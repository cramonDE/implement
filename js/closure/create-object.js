// 在创建新的对象或者类时，方法通常应该关联于对象的原型，而不是定义到对象的构造器中。
// 原因是这将导致每次构造器被调用时，方法都会被重新赋值一次
//（也就是说，对于每个对象的创建，方法都会被重新赋值）。

function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
    this.getName = function () {
        return this.name;
    };

    this.getMessage = function () {
        return this.message;
    };
}

// 更改为

function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
}
MyObject.prototype.getName = function () {
    return this.name;
};
MyObject.prototype.getMessage = function () {
    return this.message;
};
