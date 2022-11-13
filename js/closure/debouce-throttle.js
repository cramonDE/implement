// 防抖

function debounce(fn, wait) {
    let timeout;
    return function () {
        let context = this;
        let args = arguments;
        if (timeout)
            clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(context, args)
        }, wait);
    }
}
// 处理函数
function handle() {
    console.log(Math.random());
}
// 滚动事件
window.addEventListener('scroll', debounce(handle, 1000));


// 节流

var throttle = function (func, delay) {
    var prev = Date.now();
    return function () {
        var context = this;
        var args = arguments;
        var now = Date.now();
        if (now - prev >= delay) {
            func.apply(context, args);
            prev = Date.now();
        }
    }
}
function handle() {
    console.log(Math.random());
}
window.addEventListener('scroll', throttle(handle, 1000));
