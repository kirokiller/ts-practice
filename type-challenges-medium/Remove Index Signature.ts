/* 实现 RemoveIndexSignature<T> 把对象 <T> 中 Index 下标移除：c */
type Foo = {
  [key: string]: any;
  foo(): void;
};

type A = RemoveIndexSignature<Foo>; // expected { foo(): void }

type RemoveIndexSignature<T> = {
  [K in keyof T as K extends `${infer P}` ? P : never]: T[K];
};

export {};
