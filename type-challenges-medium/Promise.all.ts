const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);

declare function PromiseAll<T>(values: T): Promise<{
  [P in keyof T]: T[P] extends Promise<infer U> ? Promise<U> : T[P];
}>;

export {};
