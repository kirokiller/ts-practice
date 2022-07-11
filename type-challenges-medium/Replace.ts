type relaced = Replace<"types are fun!", "fun", "awesome">;

type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer A}${From}${infer B}` ? `${A}${To}${B}` : S;

export {};
