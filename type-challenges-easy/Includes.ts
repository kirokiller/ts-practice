type Includes<T extends any[], U> = U extends T[number] ? true : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Santana">;

// 反例
type isPillarMen2 = Includes<[boolean], false>; // true

/* 
  这两个函数内的 T 属于 deferred（延迟）判断的类型，该类型判断依赖于内部 isTypeIdenticalTo 函数完成判断
*/
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

type Includes2<T extends any[], U> = T extends [infer F, ...infer Rest]
  ? Equal<F, U> extends true
    ? true
    : Includes2<Rest, U>
  : false;

type isPillarMen3 = Includes2<[boolean], false>; // false

export {};
