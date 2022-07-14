/* 实现 EndsWith<T, U> 判断字符串 T 是否以 U 结尾： */
type a = EndsWith<"abc", "bc">; // expected to be true
type b = EndsWith<"abc", "abc">; // expected to be true
type c = EndsWith<"abc", "d">; // expected to be false

type EndsWith<T extends string, U extends string> = T extends `${string}${U}`
  ? true
  : false;

export {};
