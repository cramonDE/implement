// 一般值类型的判断（String、Number、Boolean）
var a = 1,
  b = 'hello',
  c = true;
console.log(typeof a === 'number'); // true
console.log(typeof b === 'string'); // true
console.log(typeof c === 'boolean'); // true

// 是否是Undefined类型
function isUndefined(value){
  if(!value && typeof value === 'undefined') return true;
  return false;
}

// 是否是 null 类型
function isNull(value) {
  if (!value && typeof value === 'object') return true;
  return false;
}

// 数组的判断
function isArray(value) {
  if (Array.isArray(value)) return true;
  return false;
}

// 对象的判断
function isObj(value) {
  if (value.toString() === '[object Object]') return true;
  return false;
}

// 函数的判断
function isFunction(value) {
  if (typeof value === 'function') return true;
  return false;
}

// 空对象判断
var obj = {};
console.log(JSON.stringify(obj) === '{}');