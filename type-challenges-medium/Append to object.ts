type Test = { id: "1" };

type Rsult = AppendToObject<Test, "value", 4>;

type AppendToObject2<T extends object, k extends string, v> = {
  [P in k]: v;
} & T;

type AppendToObject<T, U extends string | number | symbol, V> = {
  [key in keyof T | U]: key extends U ? V : T[Exclude<key, U>];
};

type Test2 = { id: "1" };

type Rsult2 = AppendToObject2<Test, "id", 4>;

export { AppendToObject };
