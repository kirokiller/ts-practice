type Sample1 = AnyOf<[1, "", false, [], {}]>; // expected to be true.
type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false.

type Falsy =
  | ""
  | never
  | undefined
  | null
  | 0
  | false
  | []
  | Record<PropertyKey, never>;
type AnyOf<T extends readonly any[]> = T extends Falsy[] ? false : true;

export { AnyOf };
