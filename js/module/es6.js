// index.mjs

import {log} from './lib.mjs';
export const name = 'index';
log();

// lib.mjs
import {name} from './index.mjs';
export const log = () => {
    console.log(name);
};

/**
 * 1. 执行 index.mjs
 * 2. [index.mjs] 导入 log 模块
 * 3. [lib.mjs] 从 index.js 导入 name 模块（此时为引用，不能直接打印）
 * 4. [lib.js] 导出 log 函数，调用的话会输出内存中 name 真正指向的值
 * 5. [index.js] 导出 name，接口和引用在编译阶段就已经确定了
 */