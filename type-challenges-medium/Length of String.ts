type A = LengthOfString<"abc">;

type LengthOfString<S, N extends any[] = []> = S extends `${infer S}${infer E}`
  ? LengthOfString<E, [...N, S]>
  : N["length"];

export {};
