const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

// type a = MyReturnType<typeof fn>; // should be "1 | 2"

type a = typeof fn;

type MyReturnType<T> = T extends (...arg: any[]) => infer P ? P : never;
