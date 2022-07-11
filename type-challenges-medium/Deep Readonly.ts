type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

type Todo = DeepReadonly<X>; // should be same as `Expected`

var a: Todo = {
  x: {
    a: 1,
    b: "hi",
  },
  y: "hey",
};

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Object ? DeepReadonly<T[P]> : T[P];
};

// Object 也可以用 Record<string, any> 代替。

export { DeepReadonly };
