type Fn = (a: number, b: string) => number;

type Result = AppendArgument<Fn, boolean>; // expected be (a: number, b: string, x: boolean) => number

type AppendArgument<F, E> = F extends (...args: infer T) => infer R
  ? (...args: [...T, E]) => R
  : F;

export { AppendArgument };
