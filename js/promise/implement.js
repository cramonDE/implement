// https://zhuanlan.zhihu.com/p/58428287
//极简的实现
class PromiseImplement {
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


// 链式调用需要进行一系列绑定，在 resolve 实际调用的时机才执行，，因此需要在 promise 内部维护状态
p = new Promise(resolve => {
    console.log('同步执行');
    resolve('同步执行');
}).then(tip => {
    console.log('then1', tip);
}).then(tip => {
    console.log('then2', tip);
});

setTimeout(() => {
    p.then(tip => {
        console.log('then3', tip);
    })
});


//极简的实现+链式调用+延迟机制+状态
class Promise {
    callbacks = [];
    state = 'pending';//增加状态
    value = null;//保存结果，将 resolve 的值传给 then 绑定的函数
    constructor(fn) {
        fn(this._resolve.bind(this));
    }
    then(onFulfilled) {
        if (this.state === 'pending') {//在resolve之前，跟之前逻辑一样，添加到callbacks中
            this.callbacks.push(onFulfilled);
        } else {//在resolve之后，直接执行回调，返回结果了
            onFulfilled(this.value);
        }
        return this;
    }
    _resolve(value) {
        this.state = 'fulfilled';//改变状态
        this.value = value;//保存结果
        this.callbacks.forEach(fn => fn(value));
    }
}
