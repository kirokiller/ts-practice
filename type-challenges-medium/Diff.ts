type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};

type Result = Diff<Foo, Bar>; // { gender: number }

type Diff<T, U> = {
  [key in
    | Exclude<keyof T, keyof U>
    | Exclude<keyof U, keyof T>]: key extends keyof T
    ? T[key]
    : key extends keyof U
    ? U[key]
    : never;
};

export {};
