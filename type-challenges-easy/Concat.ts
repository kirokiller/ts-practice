type Concat<T extends any[], U extends any[]> = [...T, ...U];

type Result = Concat<[1], [2]>;

// 考虑非数组类型
type Concat2<T, U> = [
  ...(T extends any[] ? T : [T]),
  ...(U extends any[] ? U : [U])
];

export {};
