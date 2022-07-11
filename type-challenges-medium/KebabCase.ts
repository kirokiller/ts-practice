type Result = KebabCase<"FooBarBaz">; // 'foo-bar-baz'

type RemoveFistHyphen<S> = S extends `-${infer R}` ? R : S;

type KebabCase<S, R extends string = ""> = S extends `${infer A}${infer B}`
  ? A extends Lowercase<A>
    ? KebabCase<B, `${R}${A}`>
    : KebabCase<B, `${R}-${Lowercase<A>}`>
  : RemoveFistHyphen<R>;

export {};
