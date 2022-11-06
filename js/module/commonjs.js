// index.js
const {log} = require('./lib.js');
module.exports = {
    name: 'index'
};
log();

// lib.js
const {name} = require('./index.js');
module.exports = {
    log: function () {
        console.log(name);
    }
};

/**
 * 1. 执行 index.js
 * 2. [index.js] 导入 log 模块
 * 3. [lib.js] 从 index.js 导入 name 模块（此时为 undifined，因为未导出）
 * 4. [lib.js] 导出 log 函数，调用的话会输出此时 name 的值（undefined）
 * 5. [index.js] 导出 name， 输出 undefined
 */