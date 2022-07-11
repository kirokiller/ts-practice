/* 实现 PickByType<P, Q>，将对象 P 中类型为 Q 的 key 保留： */

type OnlyBoolean = PickByType<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  boolean
>; // { isReadonly: boolean; isEnable: boolean; }

// TO BE COTINUE

export {};
