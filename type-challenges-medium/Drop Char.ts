/* 实现 DropChar 从字符串中移除指定字符 */

type Butterfly = DropChar<" b u t t e r f l y ! ", " ">; // 'butterfly!'

type DropChar<T, S extends string> = T extends `${infer A}${S}${infer B}`
  ? DropChar<`${A}${B}`, S>
  : T;

export {};
