/* 实现 PercentageParser<T>，解析出百分比字符串的符号位与数字 */
type PString1 = "";
type PString2 = "+85%";
type PString3 = "-85%";
type PString4 = "85%";
type PString5 = "85";

type R1 = PercentageParser<PString1>; // expected ['', '', '']
type R2 = PercentageParser<PString2>; // expected ["+", "85", "%"]
type R3 = PercentageParser<PString3>; // expected ["-", "85", "%"]
type R4 = PercentageParser<PString4>; // expected ["", "85", "%"]
type R5 = PercentageParser<PString5>; // expected ["", "85", ""]



// 自解
type PercentParser<T> = T extends `${infer A}%` ? [A, "%"] : [T, ""];
type _PercentageParser<T> = T extends `${infer A}${infer B}`
  ? A extends "+" | "-"
    ? [A, ...PercentParser<B>]
    : ["", ...PercentParser<T>]
  : ["", "", ""];


// 枚举
type PercentageParser<A extends string> = 
// +/-xxx%
A extends `${infer X extends '+' | '-'}${infer Y}%`? [X, Y, '%'] : (
  // +/-xxx
  A extends `${infer X extends '+' | '-'}${infer Y}` ? [X, Y, ''] : (
    // xxx%
    A extends `${infer X}%` ? ['', X, '%'] : (
      // xxx 包括 ['100', '%', ''] 这三种情况
      A extends `${infer X}` ? ['', X, '']: never
    )
  )
)

export {};
