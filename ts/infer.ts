// 推断数组元素的类型
type ExtractArrayItemType<T> = T extends (infer U)[] ? U : T;

// 解析promise类型
type UnPromisify<T> = T extends Promise<infer U> ? U : T;

// 推断返回值类型
type MyReturnType<T> = T extends (...args: any[]) => infer P ? P : any;