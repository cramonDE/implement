// Object.assign 方法将所有可枚举（Object.propertyIsEnumerable() 返回 true）的自有（Object.hasOwnProperty() 返回 true）属性从一个或多个源对象复制到目标对象，返回修改后的对象。

//  example1
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// expected output: true

//  example2
// 简单复制对象

const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }


// example3
// object.assign 假如源对象是一个对象的引用，它仅仅会复制其引用值。

let obj1 = { a: 0 , b: { c: 0}};
let obj2 = Object.assign({}, obj1);
obj2.b.c = 3;
console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 3}}
console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 3}}
