type Parameters<T> = T extends (...args: infer P) => any ? P : [];

export {};
