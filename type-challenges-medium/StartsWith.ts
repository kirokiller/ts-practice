/* 实现 StartsWith<T, U> 判断字符串 T 是否以 U 开头： */
type a = StartsWith<"abc", "ac">; // expected to be false
type b = StartsWith<"abc", "ab">; // expected to be true
type c = StartsWith<"abc", "abcd">; // expected to be false

type StartsWith<T extends string, U extends string> = T extends `${U}${string}`
  ? true
  : false;

export {};
