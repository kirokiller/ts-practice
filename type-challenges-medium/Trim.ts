type trimmed = Trim<"   Hellow World   ">;

type Trim<U extends string> = U extends ` ${infer R}` | `${infer R} `
  ? Trim<R>
  : U;

export {};
