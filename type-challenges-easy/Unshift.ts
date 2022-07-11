type Unshift<T extends any[], U> = [U, ...T];

type Result = Unshift<[1, 2], "3">; // [1, 2, '3']

export {};
