type A = IsNever<never>; // expected to be true
type B = IsNever<undefined>; // expected to be false
type C = IsNever<null>; // expected to be false
type D = IsNever<[]>; // expected to be false
type E = IsNever<number>; // expected to be false

type IsNever2<T> = T extends never ? true : false; // 错误答案
type A2 = IsNever2<never>; // never
// never 在泛型中不会触发 extentds 判断，而是直接终结

type IsNever<T> = [T] extends [never] ? true : false;

/* never类型是任何类型的子类型，也可以赋值给任何类型；然而，
没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。
即使 any也不可以赋值给never */
export { IsNever };
