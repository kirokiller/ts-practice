type Merge<T> = {
  [K in keyof T]: T[K];
};

export default Merge;
