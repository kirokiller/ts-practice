type capitalized = Capitalize<"hello world">;

type Capitalize<T extends string> = T extends `${infer F}${infer U}`
  ? `${Uppercase<F>}${U}`
  : T;

export { Capitalize };
