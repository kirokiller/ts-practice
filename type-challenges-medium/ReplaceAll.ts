type replaced = ReplaceAll<"t y p e s", " ", "">; // expected to be 'types'

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer A}${From}${infer B}`
  ? From extends ""
    ? `${A}${To}${B}`
    : ReplaceAll<`${A}${To}${B}`, From, To>
  : S;

export {};
