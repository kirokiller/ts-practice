type Record<K extends string, T> = {
  [P in K]: T;
};

type ThreeStringProps = Record<"prop1" | "prop2" | "prop3", string>;

export {};
