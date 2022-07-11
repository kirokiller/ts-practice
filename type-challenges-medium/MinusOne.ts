/* 用 TS 实现 MinusOne 将一个数字减一： */

type Zero = MinusOne<1>; // 0
type FiftyFour = MinusOne<55>; // 54

// 存在递归上限问题
type MinusOne<T extends number, arr extends any[] = []> = [
  ...arr,
  ""
]["length"] extends T
  ? arr["length"]
  : MinusOne<T, [...arr, ""]>;

// 创建与数值相等的均为'1'的数组
type Count = ["1", "1", "1"] extends [...infer T, "1"] ? T["length"] : 0; // 2

// 快速创建'1'数组 降低递归次数
type CountTo<
  T extends string,
  Count extends 1[] = []
> = T extends `${infer First}${infer Rest}`
  ? CountTo<Rest, N<Count>[keyof N & First]>
  : Count;

type N<T extends 1[] = []> = {
  "0": [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T];
  "1": [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1];
  "2": [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1];
  "3": [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1];
  "4": [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1];
  "5": [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    1,
    1,
    1,
    1,
    1
  ];
  "6": [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    1,
    1,
    1,
    1,
    1,
    1
  ];
  "7": [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    1,
    1,
    1,
    1,
    1,
    1,
    1
  ];
  "8": [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1
  ];
  "9": [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1
  ];
};

export {};
