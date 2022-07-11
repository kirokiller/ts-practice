import { IsNever } from "./IsNever";

type case1 = IsUnion<string>; // false
type case2 = IsUnion<string | number>; // true
type case3 = IsUnion<[string | number]>; // false

type IsUnion<T, U = T> = IsNever<T> extends true
  ? false
  : T extends T
  ? [U] extends [T]
    ? false
    : true
  : false;

type A = ["a"] extends ["a" | "b"] ? "1" : "2";

type B = ["a" | "b"] extends ["a"] ? "1" : "2";

/* type X<T> = T extends ... 中 extends 前面的 T 不一定是你看到传入的 T，
如果是联合类型的话，会分发为单个类型分别处理 */
export {};
