import Merge from "./Merge";

/* 实现 RequiredByKeys<T, K>，使 K 匹配的 Key 变成必选的定义，如果不传 K 效果与 Required<T> 一样： */
interface User {
  name?: string;
  age?: number;
  address?: string;
}

type UserRequiredName = RequiredByKeys<User, "name">; // { name: string; age?: number; address?: string }

type RequiredByKeys<T, K extends PropertyKey = keyof T> = Merge<
  Required<Pick<T, K extends keyof T ? K : never>> & T
>;

export {};
