interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type MyDog = LookUp2<Cat | Dog, "dog">; // expected to be `Dog`

type LookUp<T, K> = T extends { type: infer U }
  ? U extends K
    ? T
    : never
  : never;

type LookUp2<U extends { type: any }, T extends U["type"]> = U extends {
  type: T;
}
  ? U
  : never;

export {};
