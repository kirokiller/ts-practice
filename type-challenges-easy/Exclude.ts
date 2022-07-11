// TS 对联合类型的执行是分配律
type MyExclude<T, U> = T extends U ? never : T;

type A = MyExclude<"a" | "b", "a" | "c">;
// 等价于
type B = MyExclude<"a", "a" | "c"> | Exclude<"b", "a" | "c">;

export {};
