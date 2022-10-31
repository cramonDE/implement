//极简的实现
class Promise {
    callbacks = [];
    constructor(fn) {
        fn(this._resolve.bind(this)); 
        // promise 的构造函数，其实就是把本身的 resolve 传进去
        // 传进去的时候绑定 this
    }
    then(onFulfilled) {
        this.callbacks.push(onFulfilled);
        // 调用 then 的时候也只是传入了回调，并没有实际运行
        return this;
    }
    _resolve(value) {
        this.callbacks.forEach(fn => fn(value));
        // 执行了 resolve ，就是把 then 当中绑定的函数遍历执行
    }
}

//Promise应用
let p = new Promise(resolve => {
    setTimeout(() => {
        console.log('done');
        resolve('5秒');
    }, 5000);
}).then((tip) => {
    console.log(tip);
})