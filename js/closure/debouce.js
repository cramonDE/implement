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
